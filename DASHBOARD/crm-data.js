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
                users: [
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
                ],
                insuranceCompanies: [
                    'ALLSTATE', 'AMERICAN FAMILY', 'FARM BUREAU', 'FARMERS', 'FOREMOST',
                    'GEICO', 'HARTFORD', 'HOMEFIRST AGENCY', 'HORACE MANN', 'THE GENERAL',
                    'KEMPER', 'NATIONWIDE', 'PROGRESSIVE', 'SAGESURE', 'STATEFARM',
                    'SAFECO', 'TRAVELERS', 'UNIVERSAL CASUALTY', 'USAA'
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
        this.data = JSON.parse(localStorage.getItem('umbrellaCRM'));
    }

    // Save data to localStorage
    saveData() {
        localStorage.setItem('umbrellaCRM', JSON.stringify(this.data));
    }

    // Add new lead
    addLead(leadData) {
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
        return lead;
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
        const activeLeads = this.data.leads.filter(l => l.stage !== 'CLOSED-W NEW ROOF' && l.stage !== 'CLOSED-DEAD DENIED').length;
        const activeJobs = this.data.jobs.filter(j => j.status === 'Active').length;
        const pendingTasks = this.data.tasks.filter(t => t.status === 'Pending').length;
        const monthlyRevenue = this.calculateMonthlyRevenue();

        return {
            activeLeads,
            activeJobs,
            pendingTasks,
            monthlyRevenue
        };
    }

    // Calculate monthly revenue
    calculateMonthlyRevenue() {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        
        return this.data.jobs
            .filter(job => {
                const jobDate = new Date(job.createdAt);
                return jobDate.getMonth() === currentMonth && 
                       jobDate.getFullYear() === currentYear &&
                       job.status === 'Completed';
            })
            .reduce((total, job) => total + (job.revenue || 0), 0);
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
            return leadDate >= startOfWeek && leadDate <= endOfWeek;
        }).length;
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
initializeSampleData(); 