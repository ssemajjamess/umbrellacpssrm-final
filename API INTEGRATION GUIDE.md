# API Integration Guide

## 🎉 CRM Integration Complete!

Your CRM now has **full API integration** that allows external systems (like your insurance portal) to automatically send contracts and customer data directly to your CRM.

## Overview

The integration system provides:
- **Automatic customer record creation** from external systems
- **PDF contract storage** in your document management system
- **Real-time synchronization** between your insurance portal and CRM
- **RESTful API endpoints** for easy integration
- **Comprehensive error handling** and success feedback

## API Endpoints

### 1. Main Integration Endpoint
```
POST https://crm.roofsbyumbrella.com/api/crm/receive-contract
```

**Purpose:** Accepts PDF file uploads with customer data and automatically creates customer records.

**Request Format:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body:
  - `pdf`: PDF file
  - `customerData`: JSON string with customer information

**Example Request:**
```javascript
const formData = new FormData();
formData.append('pdf', pdfFile);
formData.append('customerData', JSON.stringify({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
    address: "123 Main St, Greenville, SC 29611",
    insuranceCompany: "ALLSTATE",
    claimNumber: "CLM-2024-001",
    policyNumber: "POL-123456"
}));

fetch('https://crm.roofsbyumbrella.com/api/crm/receive-contract', {
    method: 'POST',
    body: formData
});
```

**Response:**
```json
{
    "success": true,
    "customerId": "1234567890",
    "message": "Contract received and customer record created successfully"
}
```

### 2. Alternative JSON Endpoint
```
POST https://crm.roofsbyumbrella.com/api/crm/receive-contract-json
```

**Purpose:** For server-side integrations using base64 PDF data.

**Request Format:**
- Method: `POST`
- Content-Type: `application/json`
- Body: JSON object with customer data and base64 PDF

**Example Request:**
```javascript
const contractData = {
    customerData: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "555-123-4567",
        address: "123 Main St, Greenville, SC 29611",
        insuranceCompany: "ALLSTATE",
        claimNumber: "CLM-2024-001",
        policyNumber: "POL-123456"
    },
    pdfBase64: "JVBERi0xLjQKJcOkw7zDtsO8..."
};

fetch('https://crm.roofsbyumbrella.com/api/crm/receive-contract-json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(contractData)
});
```

### 3. Customer Management Endpoints

#### Get All Customers
```
GET https://crm.roofsbyumbrella.com/api/crm/customers
```

**Response:**
```json
{
    "success": true,
    "customers": [
        {
            "id": "1234567890",
            "customerName": "John Doe",
            "email": "john.doe@example.com",
            "phone": "555-123-4567",
            "address": "123 Main St, Greenville, SC 29611",
            "insuranceCompany": "ALLSTATE",
            "claimNumber": "CLM-2024-001",
            "policyNumber": "POL-123456",
            "stage": "LEAD",
            "createdAt": "2024-01-15T10:30:00.000Z",
            "createdBy": "API Integration"
        }
    ]
}
```

#### Get Customer by ID
```
GET https://crm.roofsbyumbrella.com/api/crm/customers/:id
```

**Response:**
```json
{
    "success": true,
    "customer": {
        "id": "1234567890",
        "customerName": "John Doe",
        "email": "john.doe@example.com",
        "phone": "555-123-4567",
        "address": "123 Main St, Greenville, SC 29611",
        "insuranceCompany": "ALLSTATE",
        "claimNumber": "CLM-2024-001",
        "policyNumber": "POL-123456",
        "stage": "LEAD",
        "createdAt": "2024-01-15T10:30:00.000Z",
        "createdBy": "API Integration"
    }
}
```

## Integration Features

### ✅ Automatic Customer Creation
- Creates customer records with all provided data
- Includes name, email, phone, address, insurance information
- Sets default stage to "LEAD"
- Tracks creation source as "API Integration"

### ✅ PDF Contract Storage
- Automatically saves PDF contracts to document management
- Organizes files by customer and date
- Maintains file integrity and accessibility
- Links documents to customer records

### ✅ Real-time Synchronization
- Immediate customer record creation
- Instant PDF storage
- Real-time activity logging
- Success/failure feedback

### ✅ Error Handling
- Comprehensive validation of incoming data
- Detailed error messages
- Graceful failure handling
- Logging of all integration activities

## How It Works

### 1. Customer Signs Contract
Customer completes contract process in your insurance portal.

### 2. System Generates PDF
Insurance portal generates PDF contract with customer data.

### 3. Data Sent to CRM
PDF and customer data are automatically sent to CRM via API.

### 4. Customer Record Created
CRM creates new customer record with all provided information.

### 5. PDF Saved
Contract PDF is saved to secure document storage.

### 6. Systems Updated
Both insurance portal and CRM are updated in real-time.

## Testing Your Integration

### Test Main Endpoint
1. Go to **API Integration** page in your CRM
2. Enter test customer data in JSON format
3. Select a test PDF file
4. Click "Test Main Endpoint"
5. Verify response shows success

### Test JSON Endpoint
1. Use the same test data
2. Click "Test JSON Endpoint"
3. Verify base64 PDF handling works correctly

### Test Customer Retrieval
1. Click "Test Get Customers"
2. Verify customer list is returned
3. Check that API-created customers appear

## Implementation Examples

### JavaScript (Frontend)
```javascript
// Example: Sending contract from insurance portal
async function sendContractToCRM(customerData, pdfFile) {
    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('customerData', JSON.stringify(customerData));

    try {
        const response = await fetch('https://crm.roofsbyumbrella.com/api/crm/receive-contract', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        
        if (result.success) {
            console.log('Contract sent successfully! Customer ID:', result.customerId);
            return result;
        } else {
            console.error('Error sending contract:', result.error);
            return null;
        }
    } catch (error) {
        console.error('Network error:', error);
        return null;
    }
}
```

### Node.js (Backend)
```javascript
// Example: Server-side integration
const axios = require('axios');
const fs = require('fs');

async function sendContractToCRM(customerData, pdfPath) {
    try {
        // Read PDF file and convert to base64
        const pdfBuffer = fs.readFileSync(pdfPath);
        const pdfBase64 = pdfBuffer.toString('base64');

        const contractData = {
            customerData: customerData,
            pdfBase64: pdfBase64
        };

        const response = await axios.post(
            'https://crm.roofsbyumbrella.com/api/crm/receive-contract-json',
            contractData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.data.success) {
            console.log('Contract sent successfully! Customer ID:', response.data.customerId);
            return response.data;
        } else {
            console.error('Error sending contract:', response.data.error);
            return null;
        }
    } catch (error) {
        console.error('Network error:', error);
        return null;
    }
}
```

### PHP (Backend)
```php
// Example: PHP integration
function sendContractToCRM($customerData, $pdfPath) {
    $pdfBase64 = base64_encode(file_get_contents($pdfPath));
    
    $contractData = [
        'customerData' => $customerData,
        'pdfBase64' => $pdfBase64
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://crm.roofsbyumbrella.com/api/crm/receive-contract-json');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($contractData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    $result = json_decode($response, true);
    
    if ($result['success']) {
        echo "Contract sent successfully! Customer ID: " . $result['customerId'];
        return $result;
    } else {
        echo "Error sending contract: " . $result['error'];
        return null;
    }
}
```

## Security Features

### ✅ CORS Support
- Cross-origin requests allowed
- Proper headers for browser security
- Preflight request handling

### ✅ Data Validation
- Required field validation
- Data type checking
- File format verification

### ✅ Error Handling
- Comprehensive error responses
- Detailed logging
- Graceful failure recovery

### ✅ Activity Tracking
- All API interactions logged
- Customer creation tracking
- Document upload tracking

## Monitoring & Debugging

### Activity Log
All API interactions are logged in the CRM activity feed:
- Customer creation via API
- Document uploads via API
- Error occurrences
- Success confirmations

### Response Codes
- `200`: Success
- `400`: Bad Request (missing/invalid data)
- `404`: Endpoint not found
- `405`: Method not allowed
- `500`: Internal server error

### Testing Tools
- Built-in testing interface in API Integration page
- Real-time response display
- Error message details
- Success confirmation

## Best Practices

### 1. Error Handling
Always implement proper error handling in your integration:
```javascript
try {
    const result = await sendContractToCRM(customerData, pdfFile);
    if (result.success) {
        // Handle success
    } else {
        // Handle API error
    }
} catch (error) {
    // Handle network error
}
```

### 2. Data Validation
Validate data before sending to API:
```javascript
function validateCustomerData(customerData) {
    const required = ['name', 'email', 'phone'];
    for (const field of required) {
        if (!customerData[field]) {
            throw new Error(`Missing required field: ${field}`);
        }
    }
}
```

### 3. Retry Logic
Implement retry logic for failed requests:
```javascript
async function sendWithRetry(data, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await sendContractToCRM(data);
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}
```

### 4. Logging
Implement comprehensive logging:
```javascript
function logIntegrationAttempt(customerData, result) {
    console.log('Integration attempt:', {
        customer: customerData.name,
        success: result.success,
        customerId: result.customerId,
        timestamp: new Date().toISOString()
    });
}
```

## Support

### Getting Help
1. Check the API Integration page in your CRM
2. Review the testing tools
3. Check activity logs for errors
4. Contact support if needed

### Common Issues
1. **CORS Errors**: Ensure proper headers are set
2. **File Size**: Large PDFs may need compression
3. **Network Timeouts**: Implement retry logic
4. **Data Validation**: Check required fields

### Performance Tips
1. Compress PDFs before sending
2. Implement request caching
3. Use connection pooling
4. Monitor response times

---

**Status: LIVE AND READY** 🚀

Your CRM integration is now **100% functional** and ready for production use. The system will automatically handle incoming contracts and customer data from your insurance portal, creating seamless workflow automation for your roofing business! 