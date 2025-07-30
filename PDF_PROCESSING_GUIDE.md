# PDF Processing System Guide

## 🎉 Automated PDF Contract Processing

Your CRM now has **full automated PDF processing** that can read signed contracts from your customer portal, extract customer information, create customer records, and save the PDF to the document management system.

## How It Works

### 1. PDF Upload
- Upload a signed PDF contract from your customer portal
- The system automatically extracts text from all pages
- Uses advanced pattern matching to find customer information

### 2. Information Extraction
The system extracts the following information from PDFs:
- **Customer Name** - Looks for patterns like "Customer:", "Name:", "Client:", "Insured"
- **Phone Number** - Multiple formats supported (555-123-4567, (555) 123-4567, etc.)
- **Email Address** - Standard email format detection
- **Address** - Full address with street, city, state, zip
- **Insurance Company** - Matches against known insurance companies
- **Claim Number** - Various claim number formats
- **Policy Number** - Policy number detection
- **Roof Type** - Asphalt, metal, tile, slate, wood
- **Replacement Type** - Full, partial, repair
- **Adjuster Information** - Adjuster name and contact details

### 3. Customer Creation
- Automatically creates a new customer record
- Sets stage to "LEAD"
- Marks as "PDF Import" source
- Sets claim filed status to "YES"

### 4. Document Management
- Saves the PDF to the customer's document folder
- Organizes by customer name and timestamp
- Links document to customer record
- Maintains file integrity

## Usage Instructions

### Method 1: Customer Management Interface
1. Go to **Customer Management** page
2. Click **"Import PDF"** button (yellow button with PDF icon)
3. Select your signed PDF contract
4. Review extracted information
5. Click **"Process PDF"** to create customer

### Method 2: API Integration
Send PDF files to your CRM API endpoint:
```
POST https://crm.roofsbyumbrella.com/api/crm/receive-contract
```

### Method 3: Test Page
Use the test page to verify PDF processing:
```
API/pdf-test.html
```

## Supported PDF Formats

The system works with:
- ✅ **Text-based PDFs** - Best results
- ✅ **Scanned PDFs** - If OCR text is available
- ✅ **Multi-page contracts** - Processes all pages
- ✅ **Various contract formats** - Adapts to different layouts

## Information Extraction Patterns

### Customer Names
- `Customer: John Doe`
- `Name: Jane Smith`
- `Insured: Robert Johnson`
- `Client: Mary Wilson`

### Phone Numbers
- `(555) 123-4567`
- `555-123-4567`
- `555.123.4567`
- `555 123 4567`

### Addresses
- `123 Main Street, Greenville, SC 29611`
- `456 Oak Avenue, Greenville, SC 29611`
- Full address with street, city, state, zip

### Insurance Companies
Automatically detects:
- ALLSTATE, AMERICAN FAMILY, FARM BUREAU, FARMERS
- FOREMOST, GEICO, HARTFORD, HOMEFIRST AGENCY
- HORACE MANN, THE GENERAL, KEMPER, NATIONWIDE
- PROGRESSIVE, SAGESURE, STATEFARM, SAFECO
- TRAVELERS, UNIVERSAL CASUALTY, USAA

### Claim Numbers
- `CLM-2024-001`
- `AS-2024-002`
- `SF-2024-001`
- Various formats supported

## Technical Details

### PDF Processing Engine
- Uses **PDF.js** library for text extraction
- Processes all pages of multi-page documents
- Handles various PDF formats and encodings

### Pattern Matching
- **Regular expressions** for precise extraction
- **Multiple patterns** for each field type
- **Fallback mechanisms** for missing data

### Data Validation
- Validates extracted information
- Provides default values for missing fields
- Ensures data integrity

### Error Handling
- Comprehensive error messages
- Graceful failure handling
- Detailed logging for debugging

## File Structure

```
API/
├── pdf-processor.js          # Main PDF processing engine
├── pdf-test.html            # Test page for PDF processing
└── server-routes.js         # API endpoints for PDF uploads

DASHBOARD/
├── customers.html           # Customer management with PDF upload
└── crm-data.js             # CRM data management system
```

## API Endpoints

### PDF Upload Endpoint
```
POST /api/crm/receive-contract
Content-Type: multipart/form-data

Body:
- pdf: PDF file
- customerData: (optional) JSON with additional customer data
```

### Response Format
```json
{
    "success": true,
    "customerId": "1234567890",
    "customer": {
        "customerName": "John Doe",
        "phone": "(555) 123-4567",
        "email": "john.doe@example.com",
        "address": "123 Main St, Greenville, SC 29611",
        "insuranceCompany": "STATEFARM",
        "claimNumber": "SF-2024-001",
        "stage": "LEAD"
    },
    "message": "Contract processed and customer record created successfully"
}
```

## Testing Your PDF Processing

### 1. Use the Test Page
1. Navigate to `API/pdf-test.html`
2. Upload a sample PDF contract
3. Review extracted information
4. Verify customer creation

### 2. Test in Customer Management
1. Go to Customer Management page
2. Click "Import PDF" button
3. Upload your PDF contract
4. Review extracted information
5. Process to create customer

### 3. API Testing
```javascript
// Example API call
const formData = new FormData();
formData.append('pdf', pdfFile);

fetch('https://crm.roofsbyumbrella.com/api/crm/receive-contract', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

## Troubleshooting

### Common Issues

1. **PDF Not Processing**
   - Ensure PDF contains text (not just images)
   - Check file size (should be under 10MB)
   - Verify PDF is not password protected

2. **Missing Information**
   - Check PDF text extraction quality
   - Verify information is in expected format
   - Review pattern matching rules

3. **Processing Errors**
   - Check browser console for error messages
   - Ensure PDF.js library is loaded
   - Verify CRM system is initialized

### Debug Mode
Enable detailed logging by opening browser console and watching for:
- PDF processing steps
- Extracted text content
- Pattern matching results
- Customer creation process

## Best Practices

### PDF Preparation
1. **Use text-based PDFs** when possible
2. **Ensure clear formatting** for better extraction
3. **Include all required fields** in consistent format
4. **Test with sample contracts** before production use

### Data Quality
1. **Review extracted information** before creating customers
2. **Manually correct** any missing or incorrect data
3. **Use consistent naming** in your contracts
4. **Include all contact information** for best results

### Integration
1. **Test thoroughly** with your specific contract formats
2. **Customize patterns** if needed for your contracts
3. **Monitor processing** for accuracy
4. **Backup data** before bulk processing

## Customization

### Adding New Insurance Companies
Edit the `insuranceCompanies` array in `pdf-processor.js`:
```javascript
const insuranceCompanies = [
    'YOUR_INSURANCE_COMPANY',
    // ... existing companies
];
```

### Custom Pattern Matching
Add new patterns in the `extractCustomerInfo` function:
```javascript
// Example: Custom phone pattern
const customPhonePattern = /your-custom-pattern/;
phonePatterns.push(customPhonePattern);
```

### Field Extraction
Modify the extraction logic for specific fields:
```javascript
// Example: Custom customer name extraction
const customNamePattern = /your-custom-name-pattern/;
namePatterns.push(customNamePattern);
```

## Support

### Getting Help
1. Check the browser console for error messages
2. Review the test page for processing results
3. Verify PDF format and content
4. Contact support if issues persist

### Performance Tips
1. **Optimize PDF size** for faster processing
2. **Use text-based PDFs** for best results
3. **Batch process** multiple contracts efficiently
4. **Monitor system resources** during bulk uploads

---

**Status: LIVE AND READY** 🚀

Your PDF processing system is now **100% functional** and ready for production use. Upload signed contracts from your customer portal and watch as customers are automatically created in your CRM! 