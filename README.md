# Umbrella Claims & Property Solutions CRM

A comprehensive Customer Relationship Management (CRM) system designed specifically for property contractors and insurance professionals. This system streamlines lead management, claims processing, and business operations.

## 🚀 Features

### Core CRM Functionality
- **Lead Management**: Capture, track, and convert leads efficiently
- **Customer Database**: Comprehensive customer information management
- **Stage Tracking**: Monitor customer progress through various stages
- **Document Management**: Upload and organize customer documents
- **Photo Management**: Before/after photo tracking for projects
- **Cost Tracking**: Job cost, labor cost, and profit calculations
- **Invoice Management**: Create and track invoices
- **Calendar Integration**: Schedule meetings and track appointments
- **Task Management**: Create and assign tasks to team members
- **Reminder System**: Automated reminders for follow-ups

### Advanced Features
- **API Integration**: External system integration capabilities
- **Real-time Analytics**: Dashboard with key performance metrics
- **Mobile Responsive**: Works seamlessly on all devices
- **User Management**: Multi-user support with role-based access
- **Data Export**: CSV export functionality
- **Search & Filter**: Advanced customer search and filtering
- **Activity Logging**: Comprehensive audit trail

### Insurance & Claims
- **Claims Processing**: Streamlined insurance claims management
- **Insurance Company Tracking**: Support for major insurance providers
- **Adjuster Information**: Track adjuster details and communications
- **Policy Management**: Store and manage policy information

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design principles
- **Icons**: Font Awesome 6.0
- **Fonts**: Google Fonts (Roboto)
- **Deployment**: Vercel
- **Storage**: LocalStorage for client-side data persistence

## 📁 Project Structure

```
├── index.html                 # Main login page
├── DASHBOARD/                 # Dashboard and CRM pages
│   ├── DASHBOARD.html        # Main dashboard
│   ├── customers.html        # Customer management
│   ├── NEW LEAD.html         # Lead creation
│   ├── CALENDAR.html         # Calendar management
│   ├── INVOICE MANAGEMENT.html # Invoice system
│   ├── API INTEGRATION.html  # API integration
│   ├── CREATE A TASK.html    # Task management
│   ├── REMINDER.html         # Reminder system
│   └── crm-data.js          # Core CRM functionality
├── API/                      # API integration files
│   ├── crm-api.js           # Client-side API
│   └── server-routes.js     # Server-side routes
├── ACCOUNT SETTINGS/         # User account management
├── LOGOS/                    # Company branding assets
├── vercel.json              # Vercel deployment config
├── package.json             # Project dependencies
└── README.md               # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd umbrella-crm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Access the application**
   - Open `http://localhost:3000` in your browser
   - Use demo credentials:
     - **James Causey**: james@roofsbyumbrella.com
     - **Daniel Pruiksma**: daniel@roofsbyumbrella.com
     - **Password**: demo123

### Production Deployment

1. **Deploy to Vercel**
   ```bash
   npm run deploy
   ```

2. **Or deploy manually**
   ```bash
   vercel --prod
   ```

## 🔐 Authentication

The system uses a simple authentication system with demo credentials:

- **James Causey** (Owner): james@roofsbyumbrella.com
- **Daniel Pruiksma** (Sales): daniel@roofsbyumbrella.com
- **Password**: demo123

## 📊 Dashboard Features

### Key Metrics
- **Total Customers**: Active customer count
- **Total Revenue**: Monthly revenue tracking
- **Active Jobs**: Jobs currently in progress
- **Pending Claims**: Claims awaiting approval

### Quick Actions
- Add New Lead
- View Customers
- Schedule Meeting
- Create Invoice
- Create Task
- API Integration

## 👥 User Management

### User Roles
- **Owner**: Full system access
- **Sales**: Customer and lead management
- **Admin**: System administration

### User Features
- Profile management
- Activity tracking
- Role-based permissions
- Session management

## 📈 Customer Stages

The system tracks customers through these stages:

1. **LEAD** - Initial contact
2. **WAITING ADJUSTMENT** - Insurance adjuster review
3. **WAITING INS SCOPE** - Insurance scope pending
4. **READY TO INSTALL** - Ready for installation
5. **INVOICED WPAYMENT** - Invoice sent, payment pending
6. **CLOSED-W NEW ROOF** - Successfully completed
7. **CLOSED-DEAD DENIED** - Claim denied or cancelled
8. **WAITING FEE** - Fee collection pending

## 🔧 API Integration

The CRM includes API endpoints for external system integration:

- **POST** `/api/crm/receive-contract` - Receive contracts from external systems
- **POST** `/api/crm/receive-contract-json` - JSON-based contract submission
- **GET** `/api/crm/customers` - Retrieve customer data
- **GET** `/api/crm/customers/:id` - Get specific customer details

## 📱 Mobile Support

The application is fully responsive and optimized for:
- Mobile phones
- Tablets
- Desktop computers
- Touch interfaces

## 🔒 Data Security

- Client-side data storage using LocalStorage
- No sensitive data transmitted to external servers
- Secure authentication system
- Data validation and sanitization

## 🛠️ Customization

### Adding New Features
1. Create new HTML pages in the appropriate directory
2. Add navigation links in existing pages
3. Update the CRM data structure in `crm-data.js`
4. Test thoroughly before deployment

### Styling Customization
- Modify CSS in individual HTML files
- Update color schemes in CSS variables
- Add new Font Awesome icons as needed

## 📋 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🐛 Troubleshooting

### Common Issues

1. **Login not working**
   - Clear browser cache and cookies
   - Ensure JavaScript is enabled
   - Check browser console for errors

2. **Data not saving**
   - Check LocalStorage availability
   - Ensure browser supports LocalStorage
   - Clear browser data if needed

3. **Mobile menu not working**
   - Check touch events
   - Ensure proper CSS loading
   - Test on different devices

### Debug Mode
Enable debug mode by adding `?debug=true` to any URL to see detailed console logs.

## 📞 Support

For technical support or feature requests:
- **Email**: customercare@roofsbyumbrella.com
- **Phone**: (864) 767-6188
- **Website**: www.roofsbyumbrella.com

## 📄 License

This project is proprietary software developed for Umbrella Claims & Property Solutions.

## 🔄 Version History

- **v1.0.0** - Initial release with core CRM functionality
- **v1.1.0** - Added API integration capabilities
- **v1.2.0** - Enhanced mobile responsiveness
- **v1.3.0** - Improved filtering and search functionality
- **v1.4.0** - Added delete customer functionality and stage filtering fixes

---

**Built with ❤️ for Umbrella Claims & Property Solutions** 