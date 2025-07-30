// PDF Processor for CRM Integration
// Automatically extracts customer information from signed PDFs and creates customer records

class PDFProcessor {
    constructor(crm) {
        this.crm = crm;
        this.pdfjsLib = null;
        this.loadPDFJS();
    }

    // Load PDF.js library for PDF processing
    async loadPDFJS() {
        try {
            // Load PDF.js from CDN
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
            script.onload = () => {
                this.pdfjsLib = window.pdfjsLib;
                this.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                console.log('PDF.js loaded successfully');
            };
            document.head.appendChild(script);
        } catch (error) {
            console.error('Error loading PDF.js:', error);
        }
    }

    // Wait for PDF.js to be loaded
    async waitForPDFJS() {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            const maxAttempts = 50; // 5 seconds max wait
            
            const checkPDFJS = () => {
                attempts++;
                if (this.pdfjsLib) {
                    resolve();
                } else if (attempts >= maxAttempts) {
                    reject(new Error('PDF.js failed to load after 5 seconds'));
                } else {
                    setTimeout(checkPDFJS, 100);
                }
            };
            checkPDFJS();
        });
    }

    // Extract customer information from PDF file (without creating customer)
    async extractCustomerInfoFromFile(pdfFile) {
        try {
            console.log('Extracting customer info from PDF:', pdfFile.name);
            
            // Wait for PDF.js to be loaded
            if (!this.pdfjsLib) {
                console.log('Waiting for PDF.js to load...');
                await this.waitForPDFJS();
            }
            
            // Convert file to ArrayBuffer
            const arrayBuffer = await pdfFile.arrayBuffer();
            
            // Load PDF document
            const pdfDocument = await this.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            
            let extractedText = '';
            
            // Extract text from all pages
            for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
                const page = await pdfDocument.getPage(pageNum);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map(item => item.str).join(' ');
                extractedText += pageText + ' ';
            }
            
            console.log('Extracted text from PDF:', extractedText.substring(0, 200) + '...');
            
            // Extract customer information from text
            const customerInfo = this.extractCustomerInfo(extractedText);
            
            return {
                success: true,
                customerInfo: customerInfo,
                message: 'Customer information extracted successfully'
            };
            
        } catch (error) {
            console.error('Error extracting customer info from PDF:', error);
            return {
                success: false,
                error: 'Error extracting customer info: ' + error.message
            };
        }
    }

    // Process uploaded PDF and extract customer information
    async processPDFContract(pdfFile) {
        try {
            console.log('Processing PDF contract:', pdfFile.name);
            
            // Extract customer information first
            const extractedResult = await this.extractCustomerInfoFromFile(pdfFile);
            
            if (!extractedResult.success) {
                return extractedResult;
            }
            
            // Create customer record
            const customer = await this.createCustomerFromPDF(extractedResult.customerInfo, pdfFile);
            
            // Save PDF to document management
            await this.savePDFToDocuments(customer, pdfFile);
            
            return {
                success: true,
                customer: customer,
                message: 'PDF processed and customer created successfully'
            };
            
        } catch (error) {
            console.error('Error processing PDF:', error);
            return {
                success: false,
                error: 'Error processing PDF: ' + error.message
            };
        }
    }

    // Extract customer information from PDF text
    extractCustomerInfo(text) {
        const info = {
            customerName: '',
            phone: '',
            email: '',
            address: '',
            insuranceCompany: '',
            claimNumber: '',
            policyNumber: '',
            roofType: '',
            replacementType: '',
            adjusterInfo: '',
            notes: ''
        };

        try {
            // Extract customer name (look for patterns like "Customer:", "Name:", "Client:")
            const namePatterns = [
                /(?:customer|client|name)[\s:]*([A-Za-z\s]+(?:Jr\.|Sr\.|III|IV)?)/i,
                /(?:insured|policyholder)[\s:]*([A-Za-z\s]+(?:Jr\.|Sr\.|III|IV)?)/i
            ];
            
            for (const pattern of namePatterns) {
                const match = text.match(pattern);
                if (match && match[1]) {
                    info.customerName = match[1].trim();
                    break;
                }
            }

            // Extract phone number
            const phonePatterns = [
                /(?:phone|tel|telephone)[\s:]*([\d\-\(\)\s]+)/i,
                /(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})/,
                /(\(\d{3}\)\s?\d{3}-\d{4})/
            ];
            
            for (const pattern of phonePatterns) {
                const match = text.match(pattern);
                if (match && match[1]) {
                    info.phone = match[1].trim();
                    break;
                }
            }

            // Extract email
            const emailPattern = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
            const emailMatch = text.match(emailPattern);
            if (emailMatch) {
                info.email = emailMatch[1];
            }

            // Extract address
            const addressPatterns = [
                /(?:address|location)[\s:]*([\d\sA-Za-z,.-]+(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd)[\s,]+[A-Za-z\s]+,\s*[A-Z]{2}\s*\d{5})/i,
                /(\d+\s+[A-Za-z\s]+(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd)[\s,]+[A-Za-z\s]+,\s*[A-Z]{2}\s*\d{5})/i
            ];
            
            for (const pattern of addressPatterns) {
                const match = text.match(pattern);
                if (match && match[1]) {
                    info.address = match[1].trim();
                    break;
                }
            }

            // Extract insurance company
            const insuranceCompanies = [
                'ALLSTATE', 'AMERICAN FAMILY', 'FARM BUREAU', 'FARMERS', 'FOREMOST',
                'GEICO', 'HARTFORD', 'HOMEFIRST AGENCY', 'HORACE MANN', 'THE GENERAL',
                'KEMPER', 'NATIONWIDE', 'PROGRESSIVE', 'SAGESURE', 'STATEFARM',
                'SAFECO', 'TRAVELERS', 'UNIVERSAL CASUALTY', 'USAA'
            ];
            
            for (const company of insuranceCompanies) {
                if (text.toUpperCase().includes(company)) {
                    info.insuranceCompany = company;
                    break;
                }
            }

            // Extract claim number
            const claimPatterns = [
                /(?:claim|claim number|claim #)[\s:]*([A-Za-z0-9\-]+)/i,
                /(?:claim number|claim #)[\s:]*([A-Z]{2,3}-\d{4}-\d{3,4})/i
            ];
            
            for (const pattern of claimPatterns) {
                const match = text.match(pattern);
                if (match && match[1]) {
                    info.claimNumber = match[1].trim();
                    break;
                }
            }

            // Extract policy number
            const policyPatterns = [
                /(?:policy|policy number|policy #)[\s:]*([A-Za-z0-9\-]+)/i,
                /(?:policy number|policy #)[\s:]*([A-Z]{2,3}\d{6,8})/i
            ];
            
            for (const pattern of policyPatterns) {
                const match = text.match(pattern);
                if (match && match[1]) {
                    info.policyNumber = match[1].trim();
                    break;
                }
            }

            // Extract roof type
            const roofPatterns = [
                /(?:roof type|roof)[\s:]*([A-Za-z\s]+(?:shingle|metal|tile|slate|wood))/i,
                /(?:asphalt|metal|tile|slate|wood)[\s]+(?:roof|shingle)/i
            ];
            
            for (const pattern of roofPatterns) {
                const match = text.match(pattern);
                if (match && match[1]) {
                    info.roofType = match[1].trim();
                    break;
                }
            }

            // Extract replacement type
            const replacementPatterns = [
                /(?:replacement type|repair type)[\s:]*([A-Za-z\s]+(?:full|partial|repair))/i,
                /(?:full|partial)[\s]+(?:replacement|repair)/i
            ];
            
            for (const pattern of replacementPatterns) {
                const match = text.match(pattern);
                if (match && match[1]) {
                    info.replacementType = match[1].trim();
                    break;
                }
            }

            // Extract adjuster information
            const adjusterPatterns = [
                /(?:adjuster|adjuster name)[\s:]*([A-Za-z\s]+)/i,
                /(?:adjuster)[\s:]*([A-Za-z\s]+(?:phone|email))/i
            ];
            
            for (const pattern of adjusterPatterns) {
                const match = text.match(pattern);
                if (match && match[1]) {
                    info.adjusterInfo = match[1].trim();
                    break;
                }
            }

            console.log('Extracted customer info:', info);
            return info;
            
        } catch (error) {
            console.error('Error extracting customer info:', error);
            return info;
        }
    }

    // Create customer record from extracted information
    async createCustomerFromPDF(customerInfo, pdfFile) {
        try {
            console.log('Creating customer from PDF info:', customerInfo);
            
            // Set default values for missing fields
            const customer = {
                customerName: customerInfo.customerName || `Customer_${Date.now()}`, // Ensure unique name
                phone: customerInfo.phone || 'N/A',
                email: customerInfo.email || '',
                address: customerInfo.address || 'Address from PDF',
                insuranceCompany: customerInfo.insuranceCompany || 'TBD',
                claimNumber: customerInfo.claimNumber || '',
                policyNumber: customerInfo.policyNumber || '',
                roofType: customerInfo.roofType || '',
                replacementType: customerInfo.replacementType || '',
                adjusterInfo: customerInfo.adjusterInfo || '',
                stage: 'LEAD',
                soldBy: 'PDF Import',
                feePaid: 'N/A',
                jobCost: 0,
                laborCost: 0,
                materialCost: 0,
                profit: 0,
                googleRating: 0,
                approved: 'PENDING',
                claimFiled: 'YES',
                createdAt: new Date().toISOString(),
                createdBy: 'PDF Import',
                documents: [],
                photos: { before: [], after: [] },
                activities: [],
                notes: `Customer created from PDF: ${pdfFile.name}`
            };

            // Add customer to CRM
            const newCustomer = this.crm.addLead(customer);
            
            // Add activity
            this.crm.addActivity('customer', 'created_from_pdf', `Customer ${customer.customerName} created from PDF import`);
            
            console.log('Customer created successfully:', newCustomer);
            return newCustomer;
            
        } catch (error) {
            console.error('Error creating customer from PDF:', error);
            throw error;
        }
    }

    // Save PDF to document management
    async savePDFToDocuments(customer, pdfFile) {
        try {
            console.log('Saving PDF to documents for customer:', customer.customerName);
            
            // Convert PDF to base64
            const arrayBuffer = await pdfFile.arrayBuffer();
            const pdfBase64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
            
            // Create document record
            const documentData = {
                id: Date.now(),
                name: `Contract_${customer.customerName}_${Date.now()}.pdf`,
                type: 'contract',
                fileName: pdfFile.name,
                customerId: customer.id,
                content: pdfBase64,
                size: pdfFile.size,
                uploadedBy: 'PDF Import',
                uploadedAt: new Date().toISOString(),
                description: 'Signed contract imported from customer portal'
            };

            // Add document to customer
            if (!customer.documents) customer.documents = [];
            customer.documents.push(documentData);
            
            // Save to CRM
            this.crm.saveData();
            
            // Add activity
            this.crm.addActivity('document', 'uploaded', `Contract PDF uploaded for ${customer.customerName}`);
            
            console.log('PDF saved to documents successfully');
            return documentData;
            
        } catch (error) {
            console.error('Error saving PDF to documents:', error);
            throw error;
        }
    }

    // Process PDF file upload (main entry point)
    async processPDFUpload(pdfFile) {
        try {
            console.log('Starting PDF upload processing...');
            
            // Validate file
            if (!pdfFile || pdfFile.type !== 'application/pdf') {
                throw new Error('Invalid file type. Please upload a PDF file.');
            }
            
            // Process the PDF
            const result = await this.processPDFContract(pdfFile);
            
            if (result.success) {
                this.crm.showNotification('PDF processed successfully! Customer created.', 'success');
                return result;
            } else {
                this.crm.showNotification('Error processing PDF: ' + result.error, 'error');
                return result;
            }
            
        } catch (error) {
            console.error('Error in PDF upload processing:', error);
            this.crm.showNotification('Error processing PDF: ' + error.message, 'error');
            return {
                success: false,
                error: error.message
            };
        }
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PDFProcessor;
} else {
    window.PDFProcessor = PDFProcessor;
} 