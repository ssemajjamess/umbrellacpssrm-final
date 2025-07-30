// Server-side API routes for CRM integration
// This handles incoming requests from external systems

class CRMServerRoutes {
    constructor() {
        this.crm = window.crm; // Access the CRM instance
        this.setupRoutes();
    }

    setupRoutes() {
        // Main contract reception endpoint
        this.handleReceiveContract = this.handleReceiveContract.bind(this);
        this.handleReceiveContractJSON = this.handleReceiveContractJSON.bind(this);
        this.handleGetCustomers = this.handleGetCustomers.bind(this);
        this.handleGetCustomerById = this.handleGetCustomerById.bind(this);
    }

    // Handle PDF contract uploads with customer data - Enhanced with PDF processing
    async handleReceiveContract(request) {
        try {
            const formData = await request.formData();
            const pdfFile = formData.get('pdf');
            const customerData = formData.get('customerData') ? JSON.parse(formData.get('customerData')) : null;

            // Validate required data
            if (!pdfFile) {
                return {
                    status: 400,
                    body: JSON.stringify({
                        success: false,
                        error: 'Missing required data: PDF file'
                    })
                };
            }

            // Initialize PDF processor if not already done
            if (!window.pdfProcessor) {
                window.pdfProcessor = new PDFProcessor(this.crm);
            }

            // Process the PDF file to extract customer information
            const pdfResult = await window.pdfProcessor.processPDFContract(pdfFile);
            
            if (!pdfResult.success) {
                return {
                    status: 400,
                    body: JSON.stringify({
                        success: false,
                        error: pdfResult.error
                    })
                };
            }

            // Use extracted customer data or provided customer data
            const customer = pdfResult.customer;
            
            // Override with provided customer data if available
            if (customerData) {
                Object.assign(customer, customerData);
            }

            // Add customer to CRM
            const newCustomer = this.crm.addLead(customer);

            // Log activity
            this.crm.addActivity('contract', 'received', `Contract received from external system for ${customer.customerName}`);

            return {
                status: 200,
                body: JSON.stringify({
                    success: true,
                    customerId: newCustomer.id,
                    customer: customer,
                    message: 'Contract processed and customer record created successfully'
                })
            };

        } catch (error) {
            console.error('Error handling contract reception:', error);
            return {
                status: 500,
                body: JSON.stringify({
                    success: false,
                    error: 'Internal server error: ' + error.message
                })
            };
        }
    }

    // Handle JSON contract data (for server-side integrations)
    async handleReceiveContractJSON(request) {
        try {
            const contractData = await request.json();

            // Validate required data
            if (!contractData.customerData || !contractData.pdfBase64) {
                return {
                    status: 400,
                    body: JSON.stringify({
                        success: false,
                        error: 'Missing required data: customerData and pdfBase64'
                    })
                };
            }

            const customerData = contractData.customerData;
            const pdfBase64 = contractData.pdfBase64;

            // Create customer record
            const customer = {
                customerName: customerData.name || customerData.customerName,
                email: customerData.email,
                phone: customerData.phone,
                address: customerData.address,
                insuranceCompany: customerData.insuranceCompany,
                claimNumber: customerData.claimNumber,
                policyNumber: customerData.policyNumber,
                stage: 'LEAD',
                createdAt: new Date().toISOString(),
                createdBy: 'API Integration'
            };

            // Add customer to CRM
            const newCustomer = this.crm.addCustomer(customer);

            // Convert base64 to file for document management
            const pdfBuffer = Uint8Array.from(atob(pdfBase64), c => c.charCodeAt(0));
            const pdfBlob = new Blob([pdfBuffer], { type: 'application/pdf' });
            const pdfFile = new File([pdfBlob], `Contract_${customer.customerName}_${Date.now()}.pdf`);

            // Save PDF to document management
            const documentData = {
                name: pdfFile.name,
                type: 'contract',
                customerId: newCustomer.id,
                content: pdfBase64,
                uploadedBy: 'API Integration',
                uploadedAt: new Date().toISOString()
            };

            this.crm.uploadDocument(documentData, pdfFile);

            // Log activity
            this.crm.addActivity('contract', 'received', `Contract received from external system for ${customer.customerName}`);

            return {
                status: 200,
                body: JSON.stringify({
                    success: true,
                    customerId: newCustomer.id,
                    message: 'Contract data received and customer record created successfully'
                })
            };

        } catch (error) {
            console.error('Error handling JSON contract reception:', error);
            return {
                status: 500,
                body: JSON.stringify({
                    success: false,
                    error: 'Internal server error'
                })
            };
        }
    }

    // Get all customers
    async handleGetCustomers(request) {
        try {
            const customers = this.crm.getCustomers();
            
            return {
                status: 200,
                body: JSON.stringify({
                    success: true,
                    customers: customers
                })
            };

        } catch (error) {
            console.error('Error fetching customers:', error);
            return {
                status: 500,
                body: JSON.stringify({
                    success: false,
                    error: 'Internal server error'
                })
            };
        }
    }

    // Get customer by ID
    async handleGetCustomerById(request) {
        try {
            const url = new URL(request.url);
            const customerId = url.pathname.split('/').pop();
            
            const customer = this.crm.getCustomer(customerId);
            
            if (!customer) {
                return {
                    status: 404,
                    body: JSON.stringify({
                        success: false,
                        error: 'Customer not found'
                    })
                };
            }

            return {
                status: 200,
                body: JSON.stringify({
                    success: true,
                    customer: customer
                })
            };

        } catch (error) {
            console.error('Error fetching customer:', error);
            return {
                status: 500,
                body: JSON.stringify({
                    success: false,
                    error: 'Internal server error'
                })
            };
        }
    }

    // Route handler for all API requests
    async handleRequest(request) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Set CORS headers
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Content-Type': 'application/json'
        };

        // Handle preflight requests
        if (request.method === 'OPTIONS') {
            return {
                status: 200,
                headers: headers,
                body: ''
            };
        }

        let response;

        // Route to appropriate handler
        switch (path) {
            case '/api/crm/receive-contract':
                if (request.method === 'POST') {
                    response = await this.handleReceiveContract(request);
                } else {
                    response = { status: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
                }
                break;

            case '/api/crm/receive-contract-json':
                if (request.method === 'POST') {
                    response = await this.handleReceiveContractJSON(request);
                } else {
                    response = { status: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
                }
                break;

            case '/api/crm/customers':
                if (request.method === 'GET') {
                    response = await this.handleGetCustomers(request);
                } else {
                    response = { status: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
                }
                break;

            default:
                // Handle customer by ID route
                if (path.match(/^\/api\/crm\/customers\/\d+$/)) {
                    if (request.method === 'GET') {
                        response = await this.handleGetCustomerById(request);
                    } else {
                        response = { status: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
                    }
                } else {
                    response = { status: 404, body: JSON.stringify({ error: 'Endpoint not found' }) };
                }
                break;
        }

        // Add headers to response
        response.headers = { ...headers, ...response.headers };

        return response;
    }
}

// Export for use
window.CRMServerRoutes = CRMServerRoutes; 