// CRM API Integration System
// This handles incoming contracts and customer data from external systems

class CRMAPI {
    constructor() {
        this.baseUrl = 'https://crm.roofsbyumbrella.com';
        this.endpoints = {
            receiveContract: '/api/crm/receive-contract',
            receiveContractJSON: '/api/crm/receive-contract-json',
            customers: '/api/crm/customers',
            customerById: '/api/crm/customers/:id'
        };
    }

    // Main integration endpoint for receiving PDF contracts
    async receiveContract(pdfFile, customerData) {
        try {
            const formData = new FormData();
            formData.append('pdf', pdfFile);
            formData.append('customerData', JSON.stringify(customerData));

            const response = await fetch(`${this.baseUrl}${this.endpoints.receiveContract}`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return {
                success: true,
                customerId: result.customerId,
                message: 'Contract received and customer record created successfully'
            };
        } catch (error) {
            console.error('Error receiving contract:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    // Alternative JSON endpoint for server-side integrations
    async receiveContractJSON(contractData) {
        try {
            const response = await fetch(`${this.baseUrl}${this.endpoints.receiveContractJSON}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contractData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return {
                success: true,
                customerId: result.customerId,
                message: 'Contract data received and customer record created successfully'
            };
        } catch (error) {
            console.error('Error receiving contract JSON:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    // Get all customers
    async getCustomers() {
        try {
            const response = await fetch(`${this.baseUrl}${this.endpoints.customers}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const customers = await response.json();
            return {
                success: true,
                customers: customers
            };
        } catch (error) {
            console.error('Error fetching customers:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    // Get customer by ID
    async getCustomerById(customerId) {
        try {
            const url = `${this.baseUrl}${this.endpoints.customerById.replace(':id', customerId)}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const customer = await response.json();
            return {
                success: true,
                customer: customer
            };
        } catch (error) {
            console.error('Error fetching customer:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }
}

// Export for use in other files
window.CRMAPI = CRMAPI; 