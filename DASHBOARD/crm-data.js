// Umbrella Claims CRM Data Management System
class UmbrellaCRM {
    constructor() {
        this.initializeData();
        this.loadData();
    }

    // Initialize default data structure
    initializeData() {
        if (!localStorage.getItem('umbrellaCRM')) {
            const defaultData = {
                leads: [],
                jobs: [],
                customers: [],
                tasks: [],
                activities: [],
                documents: [],
                documentFolders: [],
                vendors: [],
                calendarEvents: [],
                users: [
                    {
                        id: 1,
                        name: 'James Causey',
                        email: 'james@roofsbyumbrella.com',
                        role: 'Administrator',
                        phone: '(864) 767-6188',
                        jobTitle: 'Owner',
                        department: 'Management',
                        bio: 'Founder and CEO of Umbrella Claims & Property Solutions',
                        photoUrl: '',
                        permissions: {
                            viewAllCustomers: true,
                            editAllCustomers: true,
                            deleteCustomers: true,
                            manageUsers: true,
                            manageSettings: true,
                            viewReports: true,
                            manageTeam: true,
                            viewOwnData: true,
                            editOwnData: true
                        },
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: 'Daniel Pruiksma',
                        email: 'daniel@roofsbyumbrella.com',
                        role: 'Manager',
                        phone: '(864) 767-6188',
                        jobTitle: 'Sales Manager',
                        department: 'Sales',
                        bio: 'Experienced sales manager with focus on customer relationships',
                        photoUrl: '',
                        permissions: {
                            viewAllCustomers: true,
                            editAllCustomers: true,
                            deleteCustomers: false,
                            manageUsers: false,
                            manageSettings: false,
                            viewReports: true,
                            manageTeam: true,
                            viewOwnData: true,
                            editOwnData: true
                        },
                        createdAt: new Date().toISOString()
                    }
                ],
                insuranceCompanies: [
                    'ALLSTATE', 'AMERICAN FAMILY', 'FARM BUREAU', 'FARMERS', 'FOREMOST',
                    'GEICO', 'HARTFORD', 'HOMEFIRST AGENCY', 'HORACE MANN', 'THE GENERAL',
                    'KEMPER', 'NATIONWIDE', 'PROGRESSIVE', 'SAGESURE', 'STATEFARM',
                    'SAFECO', 'TRAVELERS', 'UNIVERSAL CASUALTY', 'USAA', 'OTHER'
                ],
                stages: [
                    'LEAD', 'WAITING ADJUSTMENT', 'WAITING INS SCOPE', 'READY TO INSTALL',
                    'INVOICED WPAYMENT', 'CLOSED-W NEW ROOF', 'CLOSED-DEAD DENIED', 'WAITING FEE'
                ],
                currentUser: null
            };
            localStorage.setItem('umbrellaCRM', JSON.stringify(defaultData));
        }
    }

    // Load data from localStorage
    loadData() {
        try {
            const data = localStorage.getItem('umbrellaCRM');
            if (data) {
                this.data = JSON.parse(data);
                this.validateAndFixData();
            } else {
                this.initializeData();
                this.data = JSON.parse(localStorage.getItem('umbrellaCRM'));
            }
            
            // Ensure sample data is loaded if no customers exist
            if (this.data.leads.length === 0) {
                this.loadSampleData();
            }
        } catch (error) {
            console.error('Error loading CRM data:', error);
            this.initializeData();
            this.data = JSON.parse(localStorage.getItem('umbrellaCRM'));
            this.loadSampleData();
        }
    }

    // Load sample data
    loadSampleData() {
        console.log('Loading sample data...');
        const sampleCustomers = [
            {
                customerName: 'Enrique and Viviana Guzman',
                phone: '(864) 626-7669',
                email: 'enriqueguzman13@gmail.com',
                address: '18 Avice Dale Dr, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'CLOSED-W NEW ROOF',
                feePaid: 'YES! :)',
                insuranceCompany: 'SAGESURE',
                claimNumber: 'SG-2024-001',
                adjusterInfo: 'John Smith',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: 'FULL REPLACEMENT',
                jobCost: 15000,
                laborCost: 8000,
                materialCost: 7000,
                profit: 5000,
                googleRating: 5,
                createdAt: new Date().toISOString()
            },
            {
                customerName: 'James & Brenda Alexander',
                phone: '(864)-419-2313',
                email: 'ajtabga@aol.com',
                address: '603 Wilderness Trail, Liberty, SC 29657',
                soldBy: 'James Causey',
                stage: 'WAITING INS SCOPE',
                feePaid: 'N/A',
                insuranceCompany: 'FARM BUREAU',
                claimNumber: 'FB-2024-002',
                adjusterInfo: 'Grahm Whitley 864-359-3528',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: 'FULL REPLACEMENT',
                jobCost: 8500,
                laborCost: 4500,
                materialCost: 4000,
                profit: 2000,
                googleRating: 4,
                createdAt: new Date().toISOString()
            },
            {
                customerName: 'Russell Brendel',
                phone: '(425)-405-0832',
                email: 'Ourbrendelfamily@gmail.com',
                address: '108 Arizona Rd Easley Sc 29642',
                soldBy: 'Daniel Pruiksma',
                stage: 'CLOSED-DEAD DENIED',
                feePaid: 'N/A',
                insuranceCompany: 'ALLSTATE',
                claimNumber: 'AS-2024-003',
                adjusterInfo: 'Mike Wilson',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: 'FULL REPLACEMENT',
                jobCost: 0,
                laborCost: 0,
                materialCost: 0,
                profit: 0,
                googleRating: 3,
                createdAt: new Date().toISOString()
            },
            {
                customerName: 'John Brewer',
                phone: 'H(864)-616-8469 W(864) 404-5637',
                email: 'Coreygc85@icloud.com',
                address: '321 Elm St, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'WAITING FEE',
                feePaid: 'YES! :)',
                insuranceCompany: 'FOREMOST',
                claimNumber: 'FM-2024-004',
                adjusterInfo: 'Lisa Brown',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: 'LAYOVER',
                jobCost: 12000,
                laborCost: 6500,
                materialCost: 5500,
                profit: 3000,
                googleRating: 5,
                createdAt: new Date().toISOString()
            },
            {
                customerName: 'Corey Craft',
                phone: '(864) 567-8901',
                email: 'corey.craft@yahoo.com',
                address: '654 Maple Dr, Greenville, SC 29611',
                soldBy: 'Daniel Pruiksma',
                stage: 'WAIITING ADJUSTMENT',
                feePaid: 'N/A',
                insuranceCompany: 'HOMEFIRST AGENCY',
                claimNumber: 'HF-2024-005',
                adjusterInfo: 'Tina Staley',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: 'FULL REPLACEMENT',
                jobCost: 0,
                laborCost: 0,
                materialCost: 0,
                profit: 0,
                googleRating: 4,
                createdAt: new Date().toISOString()
            },
            {
                customerName: 'Tonya Strickland',
                phone: '(864) 678-9012',
                email: 'Tonstric@bellsouth.net',
                address: '987 Cedar Ln, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'LEAD',
                feePaid: 'N/A',
                insuranceCompany: 'ALLSTATE',
                claimNumber: '',
                adjusterInfo: '',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: '',
                jobCost: 0,
                laborCost: 0,
                materialCost: 0,
                profit: 0,
                googleRating: 0,
                createdAt: new Date().toISOString()
            },
            {
                customerName: 'Mike Hanner',
                phone: '(864) 789-0123',
                email: 'mike.hanner@aol.com',
                address: '147 Birch Rd, Greenville, SC 29611',
                soldBy: 'Daniel Pruiksma',
                stage: 'LEAD',
                feePaid: 'N/A',
                insuranceCompany: 'STATEFARM',
                claimNumber: '',
                adjusterInfo: '',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: '',
                jobCost: 0,
                laborCost: 0,
                materialCost: 0,
                profit: 0,
                googleRating: 0,
                createdAt: new Date().toISOString()
            },
            {
                customerName: 'Lorrie Green',
                phone: '(864) 890-1234',
                email: 'lorrie.green@icloud.com',
                address: '258 Spruce Way, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'LEAD',
                feePaid: 'N/A',
                insuranceCompany: '?????????',
                claimNumber: '',
                adjusterInfo: '',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: '',
                jobCost: 0,
                laborCost: 0,
                materialCost: 0,
                profit: 0,
                googleRating: 0,
                createdAt: new Date().toISOString()
            },
            {
                customerName: 'James Turner',
                phone: '(864) 901-2345',
                email: 'james.turner@bellsouth.net',
                address: '369 Willow Ct, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'LEAD',
                feePaid: 'N/A',
                insuranceCompany: 'STATEFARM',
                claimNumber: '',
                adjusterInfo: '',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: '',
                jobCost: 0,
                laborCost: 0,
                materialCost: 0,
                profit: 0,
                googleRating: 0,
                createdAt: new Date().toISOString()
            },
            {
                customerName: 'Joshua W. Taylor',
                phone: '(864) 012-3456',
                email: 'joshua.taylor@yahoo.com',
                address: '741 Poplar St, Greenville, SC 29611',
                soldBy: 'Daniel Pruiksma',
                stage: 'LEAD',
                feePaid: 'N/A',
                insuranceCompany: 'TBD',
                claimNumber: '',
                adjusterInfo: '',
                roofType: 'ASPHALT 30 YEAR',
                replacementType: '',
                jobCost: 0,
                laborCost: 0,
                materialCost: 0,
                profit: 0,
                googleRating: 0,
                createdAt: new Date().toISOString()
            }
        ];

        sampleCustomers.forEach(customer => {
            this.addLead(customer);
        });

        this.saveData();
        console.log('Sample data loaded successfully!');
    }

    // Validate and fix data structure
    validateAndFixData() {
        const requiredArrays = [
            'leads', 'jobs', 'customers', 'tasks', 'activities', 
            'documents', 'documentFolders', 'vendors', 'calendarEvents'
        ];
        
        let needsSave = false;
        
        requiredArrays.forEach(arrayName => {
            if (!this.data[arrayName] || !Array.isArray(this.data[arrayName])) {
                this.data[arrayName] = [];
                needsSave = true;
            }
        });

        // Ensure users array exists and has default users
        if (!this.data.users || !Array.isArray(this.data.users) || this.data.users.length === 0) {
            this.data.users = [
                {
                    id: 1,
                    name: 'James Causey',
                    email: 'james@roofsbyumbrella.com',
                    role: 'Owner',
                    phone: '(864) 767-6188'
                },
                {
                    id: 2,
                    name: 'Daniel Pruiksma',
                    email: 'daniel@roofsbyumbrella.com',
                    role: 'Sales',
                    phone: '(864) 767-6188'
                }
            ];
            needsSave = true;
        }

        // Ensure insurance companies array exists
        if (!this.data.insuranceCompanies || !Array.isArray(this.data.insuranceCompanies)) {
            this.data.insuranceCompanies = [
                'ALLSTATE', 'AMERICAN FAMILY', 'FARM BUREAU', 'FARMERS', 'FOREMOST',
                'GEICO', 'HARTFORD', 'HOMEFIRST AGENCY', 'HORACE MANN', 'THE GENERAL',
                'KEMPER', 'NATIONWIDE', 'PROGRESSIVE', 'SAGESURE', 'STATEFARM',
                'SAFECO', 'TRAVELERS', 'UNIVERSAL CASUALTY', 'USAA', 'OTHER'
            ];
            needsSave = true;
        }

        // Ensure stages array exists
        if (!this.data.stages || !Array.isArray(this.data.stages)) {
            this.data.stages = [
                'LEAD', 'WAITING ADJUSTMENT', 'WAITING INS SCOPE', 'READY TO INSTALL',
                'INVOICED WPAYMENT', 'CLOSED-W NEW ROOF', 'CLOSED-DEAD DENIED', 'WAITING FEE'
            ];
            needsSave = true;
        }

        // Fix any leads without IDs
        if (this.data.leads) {
            this.data.leads.forEach((lead, index) => {
                if (!lead.id) {
                    lead.id = Date.now() + index;
                    needsSave = true;
                }
                if (!lead.createdAt) {
                    lead.createdAt = new Date().toISOString();
                    needsSave = true;
                }
            });
        }

        if (needsSave) {
            this.saveData();
        }
    }

    // System health check
    performHealthCheck() {
        const healthReport = {
            dataIntegrity: true,
            issues: [],
            recommendations: []
        };

        try {
            // Check data structure
            if (!this.data) {
                healthReport.dataIntegrity = false;
                healthReport.issues.push('No CRM data found');
                return healthReport;
            }

            // Check required arrays
            const requiredArrays = [
                'leads', 'jobs', 'customers', 'tasks', 'activities', 
                'documents', 'documentFolders', 'vendors', 'calendarEvents'
            ];

            requiredArrays.forEach(arrayName => {
                if (!this.data[arrayName] || !Array.isArray(this.data[arrayName])) {
                    healthReport.issues.push(`Missing or invalid ${arrayName} array`);
                    healthReport.dataIntegrity = false;
                }
            });

            // Check for data inconsistencies
            if (this.data.leads) {
                this.data.leads.forEach((lead, index) => {
                    if (!lead.id) {
                        healthReport.issues.push(`Lead at index ${index} missing ID`);
                        healthReport.dataIntegrity = false;
                    }
                    if (!lead.customerName) {
                        healthReport.issues.push(`Lead at index ${index} missing customer name`);
                        healthReport.dataIntegrity = false;
                    }
                });
            }

            // Check for duplicate IDs
            const leadIds = this.data.leads?.map(l => l.id) || [];
            const duplicateIds = leadIds.filter((id, index) => leadIds.indexOf(id) !== index);
            if (duplicateIds.length > 0) {
                healthReport.issues.push(`Found ${duplicateIds.length} duplicate lead IDs`);
                healthReport.dataIntegrity = false;
            }

            // Check localStorage capacity
            try {
                const testData = 'test';
                localStorage.setItem('test', testData);
                localStorage.removeItem('test');
            } catch (error) {
                healthReport.issues.push('localStorage is full or not available');
                healthReport.dataIntegrity = false;
            }

            // Generate recommendations
            if (this.data.leads && this.data.leads.length > 100) {
                healthReport.recommendations.push('Consider archiving old leads to improve performance');
            }

            if (!this.data.currentUser) {
                healthReport.recommendations.push('No current user set - please log in');
            }

            return healthReport;
        } catch (error) {
            healthReport.dataIntegrity = false;
            healthReport.issues.push(`Health check error: ${error.message}`);
            return healthReport;
        }
    }

    // Auto-repair function
    autoRepair() {
        const healthReport = this.performHealthCheck();
        
        if (!healthReport.dataIntegrity) {
            console.log('Auto-repairing CRM data...');
            this.validateAndFixData();
            
            // Re-run health check
            const newHealthReport = this.performHealthCheck();
            if (newHealthReport.dataIntegrity) {
                this.showNotification('CRM data repaired successfully!', 'success');
            } else {
                this.showNotification('Some issues could not be automatically repaired', 'error');
            }
        }
        
        return healthReport;
    }

    // Save data to localStorage
    saveData() {
        try {
            localStorage.setItem('umbrellaCRM', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving data:', error);
            this.showNotification('Error saving data. Please try again.', 'error');
        }
    }

    // Notification system
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        
        if (type === 'success') {
            notification.style.background = '#28a745';
        } else if (type === 'error') {
            notification.style.background = '#dc3545';
        } else {
            notification.style.background = '#17a2b8';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }

    // Add new lead
    addLead(leadData) {
        try {
            // Validate required fields
            if (!leadData.customerName || !leadData.phone) {
                throw new Error('Customer name and phone are required');
            }

            // Validate email format if provided
            if (leadData.email && !this.isValidEmail(leadData.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Validate phone format
            if (!this.isValidPhone(leadData.phone)) {
                throw new Error('Please enter a valid phone number');
            }

            const lead = {
                id: Date.now(),
                ...leadData,
                createdAt: new Date().toISOString(),
                stage: 'LEAD',
                activities: [],
                // Additional fields from screenshots
                claimFiled: leadData.claimFiled || 'NO',
                approved: leadData.approved || 'PENDING',
                incidentDate: leadData.incidentDate || '',
                claimNumber: leadData.claimNumber || '',
                adjusterInfo: leadData.adjusterInfo || '',
                replacementType: leadData.replacementType || '',
                roofType: leadData.roofType || '',
                propertyType: leadData.propertyType || 'RESIDENTIAL',
                estimatedLoss: leadData.estimatedLoss || '',
                damageDescription: leadData.damageDescription || '',
                propertyValue: leadData.propertyValue || '',
                leadSource: leadData.leadSource || '',
                notes: leadData.notes || '',
                // Document and photo fields
                documents: [],
                photos: {
                    before: [],
                    after: []
                },
                // Cost tracking
                jobCost: 0,
                laborCost: 0,
                materialCost: 0,
                profit: 0,
                googleRating: 0,
                jobNotes: '',
                documentLinks: []
            };
            this.data.leads.push(lead);
            this.addActivity('lead', 'created', `New lead created for ${leadData.customerName}`);
            this.saveData();
            this.showNotification('Lead added successfully!', 'success');
            return lead;
        } catch (error) {
            console.error('Error adding lead:', error);
            this.showNotification(error.message, 'error');
            throw error;
        }
    }

    // Delete customer with backup
    deleteCustomer(customerId) {
        try {
            const customer = this.data.leads.find(c => c.id === customerId);
            if (!customer) {
                throw new Error('Customer not found');
            }

            // Create backup before deletion
            if (!this.data.deletedCustomers) {
                this.data.deletedCustomers = [];
            }
            
            const deletedCustomer = {
                ...customer,
                deletedAt: new Date().toISOString(),
                deletedBy: this.getCurrentUser()?.name || 'System'
            };
            
            this.data.deletedCustomers.push(deletedCustomer);

            // Remove from active leads
            const index = this.data.leads.findIndex(c => c.id === customerId);
            if (index !== -1) {
                this.data.leads.splice(index, 1);
            }

            this.saveData();
            this.addActivity('customer', 'deleted', `Customer ${customer.customerName} was deleted`);
            
            return customer;
        } catch (error) {
            console.error('Error deleting customer:', error);
            throw error;
        }
    }

    // Restore deleted customer
    restoreCustomer(deletedCustomerId) {
        try {
            const deletedCustomer = this.data.deletedCustomers?.find(c => c.id === deletedCustomerId);
            if (!deletedCustomer) {
                throw new Error('Deleted customer not found');
            }

            // Remove from deleted customers
            const deletedIndex = this.data.deletedCustomers.findIndex(c => c.id === deletedCustomerId);
            if (deletedIndex !== -1) {
                this.data.deletedCustomers.splice(deletedIndex, 1);
            }

            // Add back to active leads
            const restoredCustomer = {
                ...deletedCustomer,
                restoredAt: new Date().toISOString(),
                restoredBy: this.getCurrentUser()?.name || 'System'
            };
            delete restoredCustomer.deletedAt;
            delete restoredCustomer.deletedBy;
            
            this.data.leads.push(restoredCustomer);

            this.saveData();
            this.addActivity('customer', 'restored', `Customer ${deletedCustomer.customerName} was restored`);
            
            return restoredCustomer;
        } catch (error) {
            console.error('Error restoring customer:', error);
            throw error;
        }
    }

    // Get deleted customers
    getDeletedCustomers() {
        return this.data.deletedCustomers || [];
    }

    // Validate email format
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate phone format - More flexible for PDF imports
    isValidPhone(phone) {
        if (!phone || phone === 'N/A') return true; // Allow N/A for PDF imports
        
        // Remove all non-digit characters except + for international numbers
        const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
        
        // Check for various phone formats
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const usPhoneRegex = /^[1-9]\d{9}$/;
        const internationalRegex = /^[\+]?[1-9][\d]{7,15}$/;
        
        return phoneRegex.test(cleanPhone) || usPhoneRegex.test(cleanPhone) || internationalRegex.test(cleanPhone);
    }

    // Update lead stage
    updateLeadStage(leadId, newStage) {
        const lead = this.data.leads.find(l => l.id === leadId);
        if (lead) {
            const oldStage = lead.stage;
            lead.stage = newStage;
            lead.updatedAt = new Date().toISOString();
            this.addActivity('lead', 'stage_updated', `Lead ${lead.customerName} moved from ${oldStage} to ${newStage}`);
            this.saveData();
        }
    }

    // Add new job
    addJob(jobData) {
        const job = {
            id: Date.now(),
            ...jobData,
            createdAt: new Date().toISOString(),
            status: 'Active',
            activities: []
        };
        this.data.jobs.push(job);
        this.addActivity('job', 'created', `New job created for ${jobData.customerName}`);
        this.saveData();
        return job;
    }

    // Add new customer
    addCustomer(customerData) {
        const customer = {
            id: Date.now(),
            ...customerData,
            createdAt: new Date().toISOString(),
            activities: []
        };
        this.data.customers.push(customer);
        this.addActivity('customer', 'created', `New customer added: ${customerData.name}`);
        this.saveData();
        return customer;
    }

    // Add new task
    addTask(taskData) {
        const task = {
            id: Date.now(),
            ...taskData,
            createdAt: new Date().toISOString(),
            status: 'Pending',
            activities: []
        };
        this.data.tasks.push(task);
        this.addActivity('task', 'created', `New task created: ${taskData.title}`);
        this.saveData();
        return task;
    }

    // Add activity
    addActivity(type, action, description) {
        const activity = {
            id: Date.now(),
            type,
            action,
            description,
            timestamp: new Date().toISOString(),
            userId: this.data.currentUser?.id || 1
        };
        this.data.activities.unshift(activity);
        this.saveData();
    }

    // Get dashboard statistics
    getDashboardStats() {
        try {
            // Active leads (not closed)
            const activeLeads = this.data.leads.filter(l => 
                l.stage !== 'CLOSED-W NEW ROOF' && 
                l.stage !== 'CLOSED-DEAD DENIED' &&
                l.stage !== 'INVOICED WPAYMENT'
            ).length;

            // Active jobs (in progress stages)
            const activeJobs = this.data.leads.filter(l => 
                l.stage === 'READY TO INSTALL' || 
                l.stage === 'WAITING ADJUSTMENT' ||
                l.stage === 'WAITING INS SCOPE'
            ).length;

            // Pending tasks (ensure tasks array exists)
            const pendingTasks = this.data.tasks ? this.data.tasks.filter(t => t.status === 'Pending').length : 0;

            // Monthly revenue calculation
            const monthlyRevenue = this.calculateMonthlyRevenue();

            console.log('Dashboard stats calculated:', {
                activeLeads,
                activeJobs,
                pendingTasks,
                monthlyRevenue,
                totalLeads: this.data.leads.length,
                totalTasks: this.data.tasks ? this.data.tasks.length : 0
            });

            return {
                activeLeads,
                activeJobs,
                pendingTasks,
                monthlyRevenue
            };
        } catch (error) {
            console.error('Error calculating dashboard stats:', error);
            return {
                activeLeads: 0,
                activeJobs: 0,
                pendingTasks: 0,
                monthlyRevenue: 0
            };
        }
    }

    // Calculate monthly revenue
    calculateMonthlyRevenue() {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        
        return this.data.leads
            .filter(lead => {
                const leadDate = new Date(lead.createdAt);
                return leadDate.getMonth() === currentMonth && 
                       leadDate.getFullYear() === currentYear &&
                       (lead.stage === 'CLOSED-W NEW ROOF' || lead.stage === 'INVOICED WPAYMENT');
            })
            .reduce((total, lead) => total + (lead.jobCost || 0), 0);
    }

    // Calculate weekly jobs sold (Monday to Sunday)
    getWeeklyJobsSold() {
        const now = new Date();
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay() + 1); // Monday
        startOfWeek.setHours(0, 0, 0, 0);
        
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // Sunday
        endOfWeek.setHours(23, 59, 59, 999);
        
        return this.data.leads.filter(lead => {
            const leadDate = new Date(lead.createdAt);
            return leadDate >= startOfWeek && leadDate <= endOfWeek && 
                   (lead.stage === 'CLOSED-W NEW ROOF' || lead.stage === 'INVOICED WPAYMENT');
        }).length;
    }

    // Get claims count
    getClaimsCount() {
        return this.data.leads.filter(lead => 
            lead.claimNumber && lead.claimNumber.trim() !== ''
        ).length;
    }

    // Get active jobs count (jobs in progress)
    getActiveJobsCount() {
        return this.data.leads.filter(lead => 
            lead.stage === 'READY TO INSTALL' || 
            lead.stage === 'WAITING ADJUSTMENT' ||
            lead.stage === 'WAITING INS SCOPE'
        ).length;
    }

    // Get weekly record
    getWeeklyRecord() {
        return localStorage.getItem('weeklyRecord') || 0;
    }

    // Set weekly record
    setWeeklyRecord(count) {
        const currentRecord = parseInt(this.getWeeklyRecord());
        if (count > currentRecord) {
            localStorage.setItem('weeklyRecord', count);
            return true; // New record
        }
        return false; // No new record
    }

    // Calculate profit for a job
    calculateProfit(jobCost, laborCost, materialCost) {
        const totalCost = (laborCost || 0) + (materialCost || 0);
        const profit = (jobCost || 0) - totalCost;
        return Math.max(0, profit);
    }

    // Update job costs and profit
    updateJobCosts(leadId, jobCost, laborCost, materialCost) {
        const lead = this.data.leads.find(l => l.id === leadId);
        if (lead) {
            lead.jobCost = jobCost || 0;
            lead.laborCost = laborCost || 0;
            lead.materialCost = materialCost || 0;
            lead.profit = this.calculateProfit(jobCost, laborCost, materialCost);
            lead.updatedAt = new Date().toISOString();
            this.saveData();
            return lead;
        }
        return null;
    }

    // Get leads by stage
    getLeadsByStage(stage) {
        return this.data.leads.filter(lead => lead.stage === stage);
    }

    // Get recent activities
    getRecentActivities(limit = 10) {
        return this.data.activities.slice(0, limit);
    }

    // Search customers
    searchCustomers(query) {
        return this.data.customers.filter(customer => 
            customer.name.toLowerCase().includes(query.toLowerCase()) ||
            customer.email.toLowerCase().includes(query.toLowerCase()) ||
            customer.phone.includes(query)
        );
    }

    // Update user profile
    updateUserProfile(userId, profileData) {
        const user = this.data.users.find(u => u.id === userId);
        if (user) {
            Object.assign(user, profileData);
            this.saveData();
            return user;
        }
        return null;
    }

    // Update lead data
    updateLead(leadId, leadData) {
        const lead = this.data.leads.find(l => l.id === leadId);
        if (lead) {
            Object.assign(lead, leadData);
            lead.updatedAt = new Date().toISOString();
            this.saveData();
            return lead;
        }
        return null;
    }

    // Update job data
    updateJob(jobId, jobData) {
        const job = this.data.jobs.find(j => j.id === jobId);
        if (job) {
            Object.assign(job, jobData);
            job.updatedAt = new Date().toISOString();
            this.saveData();
            return job;
        }
        return null;
    }

    // Get current user
    getCurrentUser() {
        return this.data.currentUser;
    }

    // Set current user
    setCurrentUser(user) {
        this.data.currentUser = user;
        this.saveData();
    }

    // Get user by email
    getUserByEmail(email) {
        return this.data.users.find(user => user.email === email);
    }

    // Get user permissions
    getUserPermissions(email) {
        const user = this.getUserByEmail(email);
        return user ? user.permissions : null;
    }

    // Check if user has permission
    hasPermission(email, permission) {
        const user = this.getUserByEmail(email);
        return user && user.permissions && user.permissions[permission];
    }

    // Get customers based on user role
    getCustomersForUser(email) {
        const user = this.getUserByEmail(email);
        if (!user) return [];

        if (user.role === 'Administrator' || user.role === 'Manager') {
            return this.data.leads;
        } else {
            // Sales reps only see their own customers
            return this.data.leads.filter(lead => lead.soldBy === user.name);
        }
    }

    // Get team members for manager
    getTeamMembers(managerEmail) {
        const manager = this.getUserByEmail(managerEmail);
        if (!manager || manager.role !== 'Manager') return [];

        return this.data.users.filter(user => user.role === 'Sales');
    }

    // Add new user
    addUser(userData) {
        const newUser = {
            id: Date.now(),
            name: userData.name,
            email: userData.email,
            role: userData.role || 'Sales',
            phone: userData.phone || '',
            jobTitle: userData.jobTitle || '',
            department: userData.department || 'Sales',
            bio: userData.bio || '',
            photoUrl: userData.photoUrl || '',
            permissions: this.getDefaultPermissions(userData.role || 'Sales'),
            createdAt: new Date().toISOString()
        };

        this.data.users.push(newUser);
        this.saveData();
        return newUser;
    }

    // Update user
    updateUser(email, userData) {
        const userIndex = this.data.users.findIndex(u => u.email === email);
        if (userIndex !== -1) {
            this.data.users[userIndex] = { ...this.data.users[userIndex], ...userData };
            this.saveData();
            return this.data.users[userIndex];
        }
        return null;
    }

    // Remove user
    removeUser(email) {
        this.data.users = this.data.users.filter(u => u.email !== email);
        this.saveData();
    }

    // Get default permissions for role
    getDefaultPermissions(role) {
        const permissions = {
            'Administrator': {
                viewAllCustomers: true,
                editAllCustomers: true,
                deleteCustomers: true,
                manageUsers: true,
                manageSettings: true,
                viewReports: true,
                manageTeam: true,
                viewOwnData: true,
                editOwnData: true
            },
            'Manager': {
                viewAllCustomers: true,
                editAllCustomers: true,
                deleteCustomers: false,
                manageUsers: false,
                manageSettings: false,
                viewReports: true,
                manageTeam: true,
                viewOwnData: true,
                editOwnData: true
            },
            'Sales': {
                viewAllCustomers: false,
                editAllCustomers: false,
                deleteCustomers: false,
                manageUsers: false,
                manageSettings: false,
                viewReports: false,
                manageTeam: false,
                viewOwnData: true,
                editOwnData: true
            },
            'User': {
                viewAllCustomers: false,
                editAllCustomers: false,
                deleteCustomers: false,
                manageUsers: false,
                manageSettings: false,
                viewReports: false,
                manageTeam: false,
                viewOwnData: true,
                editOwnData: true
            }
        };
        return permissions[role] || permissions['User'];
    }

    // Get all insurance companies
    getInsuranceCompanies() {
        return this.data.insuranceCompanies;
    }

    // Get all stages
    getStages() {
        return this.data.stages;
    }

    // Get all users
    getUsers() {
        return this.data.users;
    }

    // Add document to customer
    addDocument(leadId, documentData) {
        const lead = this.data.leads.find(l => l.id === leadId);
        if (lead) {
            const document = {
                id: Date.now(),
                name: documentData.name,
                type: documentData.type,
                url: documentData.url,
                uploadedAt: new Date().toISOString(),
                uploadedBy: this.data.currentUser?.name || 'Unknown'
            };
            lead.documents.push(document);
            this.saveData();
            return document;
        }
        return null;
    }

    // Add photo to customer
    addPhoto(leadId, photoData, type = 'before') {
        const lead = this.data.leads.find(l => l.id === leadId);
        if (lead) {
            const photo = {
                id: Date.now(),
                name: photoData.name,
                url: photoData.url,
                tags: photoData.tags || [],
                uploadedAt: new Date().toISOString(),
                uploadedBy: this.data.currentUser?.name || 'Unknown'
            };
            lead.photos[type].push(photo);
            this.saveData();
            return photo;
        }
        return null;
    }

    // Update user profile photo
    updateUserPhoto(userId, photoUrl) {
        const user = this.data.users.find(u => u.id === userId);
        if (user) {
            user.photoUrl = photoUrl;
            this.saveData();
            return user;
        }
        return null;
    }

    // Get document folders (from Acculynx structure)
    getDocumentFolders() {
        return [
            'Contracts',
            'Insurance Documents',
            'Photos - Before',
            'Photos - After',
            'Invoices',
            'Permits',
            'Warranties',
            'Inspections',
            'Claims Documents',
            'Adjuster Reports',
            'Estimates',
            'Change Orders',
            'Punch Lists',
            'Final Walkthrough',
            'Customer Reviews'
        ];
    }

    // Create document folder
    createDocumentFolder(name) {
        const folder = {
            id: Date.now().toString(),
            name: name,
            createdAt: new Date().toISOString(),
            createdBy: this.getCurrentUser()?.name || 'Unknown'
        };
        
        if (!this.data.documentFolders) {
            this.data.documentFolders = [];
        }
        
        this.data.documentFolders.push(folder);
        this.saveData();
        return folder;
    }

    // Update document folder
    updateDocumentFolder(folderId, newName) {
        const folder = this.data.documentFolders?.find(f => f.id === folderId);
        if (folder) {
            folder.name = newName;
            folder.updatedAt = new Date().toISOString();
            this.saveData();
            return folder;
        }
        return null;
    }

    // Delete document folder
    deleteDocumentFolder(folderId) {
        if (this.data.documentFolders) {
            this.data.documentFolders = this.data.documentFolders.filter(f => f.id !== folderId);
            this.saveData();
        }
    }

    // Get documents
    getDocuments(folderId = 'all') {
        if (!this.data.documents) {
            this.data.documents = [];
        }
        
        if (folderId === 'all') {
            return this.data.documents;
        }
        
        return this.data.documents.filter(doc => doc.folder === folderId);
    }

    // Get all documents
    getAllDocuments() {
        return this.data.documents || [];
    }

    // Get single document
    getDocument(docId) {
        return this.data.documents?.find(doc => doc.id === docId);
    }

    // Upload document
    uploadDocument(docData, file) {
        const document = {
            id: Date.now().toString(),
            ...docData,
            url: URL.createObjectURL(file), // In real app, this would upload to server
            createdAt: new Date().toISOString()
        };
        
        if (!this.data.documents) {
            this.data.documents = [];
        }
        
        this.data.documents.push(document);
        this.saveData();
        return document;
    }

    // Delete document
    deleteDocument(docId) {
        if (this.data.documents) {
            this.data.documents = this.data.documents.filter(doc => doc.id !== docId);
            this.saveData();
        }
    }

    // Share document
    shareDocument(docId, email) {
        const doc = this.getDocument(docId);
        if (doc) {
            // In real app, this would send email with document link
            console.log(`Sharing document ${doc.name} with ${email}`);
            this.addActivity('document', 'shared', `Document ${doc.name} shared with ${email}`);
        }
    }

    // Add vendor/contractor
    addVendor(vendorData) {
        const vendor = {
            id: Date.now().toString(),
            ...vendorData,
            createdAt: new Date().toISOString()
        };
        
        if (!this.data.vendors) {
            this.data.vendors = [];
        }
        
        this.data.vendors.push(vendor);
        this.saveData();
        this.addActivity('vendor', 'added', `Vendor ${vendorData.company} added`);
        return vendor;
    }

    // Get vendors
    getVendors() {
        return this.data.vendors || [];
    }

    // Calendar functions
    getCalendarEvents() {
        return this.data.calendarEvents || [];
    }

    addCalendarEvent(eventData) {
        const event = {
            id: Date.now().toString(),
            ...eventData,
            createdAt: new Date().toISOString()
        };
        
        if (!this.data.calendarEvents) {
            this.data.calendarEvents = [];
        }
        
        this.data.calendarEvents.push(event);
        this.saveData();
        this.addActivity('calendar', 'event_added', `Event "${eventData.title}" added to calendar`);
        return event;
    }

    updateCalendarEvent(eventId, eventData) {
        const event = this.data.calendarEvents?.find(e => e.id === eventId);
        if (event) {
            Object.assign(event, eventData);
            event.updatedAt = new Date().toISOString();
            this.saveData();
            this.addActivity('calendar', 'event_updated', `Event "${eventData.title}" updated`);
            return event;
        }
        return null;
    }

    deleteCalendarEvent(eventId) {
        if (this.data.calendarEvents) {
            const event = this.data.calendarEvents.find(e => e.id === eventId);
            if (event) {
                this.data.calendarEvents = this.data.calendarEvents.filter(e => e.id !== eventId);
                this.saveData();
                this.addActivity('calendar', 'event_deleted', `Event "${event.title}" deleted`);
            }
        }
    }

    getEventsForCustomer(customerId) {
        return this.data.calendarEvents?.filter(event => event.customerId === customerId) || [];
    }

    getUpcomingEvents(days = 7) {
        const today = new Date();
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + days);
        
        return this.data.calendarEvents?.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= today && eventDate <= futureDate;
        }) || [];
    }

    // Invoice functions
    getInvoices() {
        return this.data.invoices || [];
    }

    addInvoice(invoiceData) {
        const invoice = {
            id: Date.now().toString(),
            ...invoiceData,
            createdAt: new Date().toISOString(),
            createdBy: this.getCurrentUser()?.name || 'Unknown'
        };
        
        if (!this.data.invoices) {
            this.data.invoices = [];
        }
        
        this.data.invoices.push(invoice);
        this.saveData();
        this.addActivity('invoice', 'created', `Invoice ${invoiceData.invoiceNumber} created for ${this.getCustomer(invoiceData.customerId)?.customerName || 'Customer'}`);
        return invoice;
    }

    updateInvoice(invoiceId, invoiceData) {
        const invoice = this.data.invoices?.find(i => i.id === invoiceId);
        if (invoice) {
            Object.assign(invoice, invoiceData);
            invoice.updatedAt = new Date().toISOString();
            this.saveData();
            this.addActivity('invoice', 'updated', `Invoice ${invoiceData.invoiceNumber} updated`);
            return invoice;
        }
        return null;
    }

    deleteInvoice(invoiceId) {
        if (this.data.invoices) {
            const invoice = this.data.invoices.find(i => i.id === invoiceId);
            if (invoice) {
                this.data.invoices = this.data.invoices.filter(i => i.id !== invoiceId);
                this.saveData();
                this.addActivity('invoice', 'deleted', `Invoice ${invoice.invoiceNumber} deleted`);
            }
        }
    }

    getInvoice(invoiceId) {
        return this.data.invoices?.find(i => i.id === invoiceId);
    }

    getInvoicesByCustomer(customerId) {
        return this.data.invoices?.filter(i => i.customerId === customerId) || [];
    }

    getInvoicesByStatus(status) {
        return this.data.invoices?.filter(i => i.status === status) || [];
    }

    getCustomer(customerId) {
        return this.data.customers?.find(c => c.id === customerId);
    }

    // API Integration functions
    addCustomerFromAPI(customerData) {
        const customer = {
            id: Date.now().toString(),
            customerName: customerData.name || customerData.customerName,
            email: customerData.email,
            phone: customerData.phone,
            address: customerData.address,
            insuranceCompany: customerData.insuranceCompany,
            claimNumber: customerData.claimNumber,
            policyNumber: customerData.policyNumber,
            stage: 'LEAD',
            createdAt: new Date().toISOString(),
            createdBy: 'API Integration',
            source: 'external_api'
        };
        
        if (!this.data.customers) {
            this.data.customers = [];
        }
        
        this.data.customers.push(customer);
        this.saveData();
        this.addActivity('customer', 'created', `Customer ${customer.customerName} created via API integration`);
        return customer;
    }

    saveContractFromAPI(customerId, pdfData, fileName) {
        const document = {
            id: Date.now().toString(),
            name: fileName || `Contract_${Date.now()}.pdf`,
            type: 'contract',
            customerId: customerId,
            content: pdfData,
            uploadedBy: 'API Integration',
            uploadedAt: new Date().toISOString(),
            source: 'external_api'
        };
        
        if (!this.data.documents) {
            this.data.documents = [];
        }
        
        this.data.documents.push(document);
        this.saveData();
        this.addActivity('document', 'uploaded', `Contract document saved via API integration for customer ${customerId}`);
        return document;
    }

    // API endpoint handlers
    handleAPIRequest(endpoint, method, data) {
        switch (endpoint) {
            case '/api/crm/receive-contract':
                return this.handleReceiveContract(data);
            case '/api/crm/receive-contract-json':
                return this.handleReceiveContractJSON(data);
            case '/api/crm/customers':
                return this.handleGetCustomers();
            default:
                if (endpoint.match(/^\/api\/crm\/customers\/\d+$/)) {
                    const customerId = endpoint.split('/').pop();
                    return this.handleGetCustomerById(customerId);
                }
                return { success: false, error: 'Endpoint not found' };
        }
    }

    handleReceiveContract(data) {
        try {
            const customer = this.addCustomerFromAPI(data.customerData);
            const document = this.saveContractFromAPI(customer.id, data.pdfData, data.fileName);
            
            return {
                success: true,
                customerId: customer.id,
                documentId: document.id,
                message: 'Contract received and customer record created successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    handleReceiveContractJSON(data) {
        try {
            const customer = this.addCustomerFromAPI(data.customerData);
            const document = this.saveContractFromAPI(customer.id, data.pdfBase64, data.fileName);
            
            return {
                success: true,
                customerId: customer.id,
                documentId: document.id,
                message: 'Contract data received and customer record created successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    handleGetCustomers() {
        try {
            return {
                success: true,
                customers: this.getCustomers()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    handleGetCustomerById(customerId) {
        try {
            const customer = this.getCustomer(customerId);
            if (!customer) {
                return {
                    success: false,
                    error: 'Customer not found'
                };
            }
            
            return {
                success: true,
                customer: customer
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    // Get leads by sales person
    getLeadsBySalesPerson(salesPerson) {
        return this.data.leads.filter(lead => lead.soldBy === salesPerson);
    }

    // Get leads by insurance company
    getLeadsByInsurance(insuranceCompany) {
        return this.data.leads.filter(lead => lead.insuranceCompany === insuranceCompany);
    }

    // Search leads by multiple criteria
    searchLeads(query, filters = {}) {
        return this.data.leads.filter(lead => {
            const matchesQuery = !query || 
                lead.customerName?.toLowerCase().includes(query.toLowerCase()) ||
                lead.email?.toLowerCase().includes(query.toLowerCase()) ||
                lead.phone?.includes(query) ||
                lead.address?.toLowerCase().includes(query.toLowerCase());
            
            const matchesStage = !filters.stage || lead.stage === filters.stage;
            const matchesSales = !filters.salesPerson || lead.soldBy === filters.salesPerson;
            const matchesInsurance = !filters.insurance || lead.insuranceCompany === filters.insurance;
            
            return matchesQuery && matchesStage && matchesSales && matchesInsurance;
        });
    }

    // Export data to CSV
    exportToCSV(data, filename) {
        try {
            const headers = Object.keys(data[0] || {});
            const csvContent = [
                headers.join(','),
                ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
            ].join('\n');
            
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            
            this.showNotification('Data exported successfully!', 'success');
        } catch (error) {
            console.error('Error exporting data:', error);
            this.showNotification('Error exporting data. Please try again.', 'error');
        }
    }

    // Backup and restore data
    backupData() {
        try {
            const backup = {
                timestamp: new Date().toISOString(),
                data: this.data
            };
            localStorage.setItem('umbrellaCRM_backup', JSON.stringify(backup));
            this.showNotification('Data backed up successfully!', 'success');
        } catch (error) {
            console.error('Error backing up data:', error);
            this.showNotification('Error backing up data.', 'error');
        }
    }

    restoreData() {
        try {
            const backup = localStorage.getItem('umbrellaCRM_backup');
            if (backup) {
                const parsedBackup = JSON.parse(backup);
                this.data = parsedBackup.data;
                this.saveData();
                this.showNotification('Data restored successfully!', 'success');
                return true;
            } else {
                this.showNotification('No backup found.', 'error');
                return false;
            }
        } catch (error) {
            console.error('Error restoring data:', error);
            this.showNotification('Error restoring data.', 'error');
            return false;
        }
    }
}

// Initialize CRM system
const crm = new UmbrellaCRM();

// Add sample data for demonstration
function initializeSampleData() {
    if (crm.data.leads.length === 0) {
        // Add sample customers from your screenshot
        const sampleCustomers = [
            {
                name: 'Enrique and Viviana Guzman',
                phone: 'H: (864) 123-4567',
                email: 'enrique.guzman@gmail.com',
                address: '123 Main St, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'CLOSED-W NEW ROOF',
                feePaid: 'YES! :)'
            },
            {
                name: 'James & Brenda Alexander',
                phone: 'H: (864) 234-5678',
                email: 'james.alexander@aol.com',
                address: '456 Oak Ave, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'WAITING INS SCOPE',
                feePaid: 'N/A'
            },
            {
                name: 'Russell Brendel',
                phone: 'H: (864) 345-6789',
                email: 'russell.brendel@icloud.com',
                address: '789 Pine St, Greenville, SC 29611',
                soldBy: 'Daniel Pruiksma',
                stage: 'CLOSED-DEAD DENIED',
                feePaid: 'N/A'
            },
            {
                name: 'John Brewer',
                phone: 'H: (864) 456-7890',
                email: 'john.brewer@bellsouth.net',
                address: '321 Elm St, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'WAITING FEE',
                feePaid: 'YES! :)'
            },
            {
                name: 'Corey Craft',
                phone: 'H: (864) 567-8901',
                email: 'corey.craft@yahoo.com',
                address: '654 Maple Dr, Greenville, SC 29611',
                soldBy: 'Daniel Pruiksma',
                stage: 'WAITING ADJUSTMENT',
                feePaid: 'N/A'
            },
            {
                name: 'Tonya Strickland',
                phone: 'H: (864) 678-9012',
                email: 'tonya.strickland@gmail.com',
                address: '987 Cedar Ln, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'LEAD',
                feePaid: 'N/A'
            },
            {
                name: 'Mike Hanner',
                phone: 'H: (864) 789-0123',
                email: 'mike.hanner@aol.com',
                address: '147 Birch Rd, Greenville, SC 29611',
                soldBy: 'Daniel Pruiksma',
                stage: 'LEAD',
                feePaid: 'N/A'
            },
            {
                name: 'Lorrie Green',
                phone: 'H: (864) 890-1234',
                email: 'lorrie.green@icloud.com',
                address: '258 Spruce Way, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'LEAD',
                feePaid: 'N/A'
            },
            {
                name: 'James Turner',
                phone: 'H: (864) 901-2345',
                email: 'james.turner@bellsouth.net',
                address: '369 Willow Ct, Greenville, SC 29611',
                soldBy: 'James Causey',
                stage: 'LEAD',
                feePaid: 'N/A'
            },
            {
                name: 'Joshua W. Taylor',
                phone: 'H: (864) 012-3456',
                email: 'joshua.taylor@yahoo.com',
                address: '741 Poplar St, Greenville, SC 29611',
                soldBy: 'Daniel Pruiksma',
                stage: 'LEAD',
                feePaid: 'N/A'
            }
        ];

        // Add customers as leads
        sampleCustomers.forEach(customer => {
            crm.addLead({
                customerName: customer.name,
                phone: customer.phone,
                email: customer.email,
                address: customer.address,
                soldBy: customer.soldBy,
                stage: customer.stage,
                feePaid: customer.feePaid,
                insuranceCompany: 'TBD',
                claimNumber: '',
                adjusterInfo: '',
                roofType: '',
                replacementType: ''
            });
        });

        // Add sample jobs
        crm.addJob({
            customerName: 'Enrique and Viviana Guzman',
            jobType: 'Roof Replacement',
            status: 'Active',
            revenue: 15000,
            startDate: '2024-07-15',
            estimatedCompletion: '2024-08-15'
        });

        crm.addJob({
            customerName: 'James & Brenda Alexander',
            jobType: 'Roof Repair',
            status: 'Active',
            revenue: 8500,
            startDate: '2024-07-20',
            estimatedCompletion: '2024-08-10'
        });

        // Add sample tasks
        crm.addTask({
            title: 'Follow up with Enrique Guzman',
            description: 'Check on roof replacement progress',
            assignedTo: 'James Causey',
            dueDate: '2024-07-30',
            priority: 'High'
        });

        crm.addTask({
            title: 'Contact insurance adjuster for Alexander claim',
            description: 'Get approval for roof repair',
            assignedTo: 'Daniel Pruiksma',
            dueDate: '2024-07-25',
            priority: 'Medium'
        });
    }
}

// Initialize sample data
if (typeof crm !== 'undefined') {
    initializeSampleData();
} else {
    // Wait for CRM to be initialized
    setTimeout(() => {
        if (typeof crm !== 'undefined') {
            initializeSampleData();
        }
    }, 1000);
} 