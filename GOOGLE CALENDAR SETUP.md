# Google Calendar Integration Setup Guide

## Overview
Your CRM now includes full Google Calendar integration that allows you to:
- Connect your company Gmail account
- Sync CRM events to Google Calendar
- Sync Google Calendar events to CRM
- Auto-sync every 15 minutes
- Manage calendar settings from Account Settings

## Setup Instructions

### Step 1: Access Calendar Settings
1. Go to **Account Settings** in your CRM
2. Click on **Google Calendar** in the left navigation
3. You'll see the Google Calendar integration section

### Step 2: Configure Gmail Account
1. Enter your company Gmail address (e.g., `umbrellacpsllp@gmail.com`)
2. Set a calendar name (e.g., "Umbrella Claims Calendar")
3. Configure sync settings:
   - ✅ Sync CRM events to Google Calendar
   - ✅ Sync Google Calendar events to CRM
   - ✅ Auto-sync every 15 minutes

### Step 3: Connect to Google
1. Click **"Connect Google Calendar"** button
2. Sign in with your company Gmail account
3. Grant calendar permissions when prompted
4. You'll see a green "Connected" status

### Step 4: Test the Connection
1. Click **"Test Sync"** to verify the connection
2. You should see "Sync test successful!" message
3. The connection status will show your Gmail address

## Using the Calendar Integration

### From Calendar Page
- **Add Events**: Create events in CRM that sync to Google Calendar
- **Sync Events**: Click "Sync with Google" to manually sync
- **Calendar Settings**: Quick access to Account Settings

### From Account Settings
- **Manage Connection**: Connect/disconnect from Google
- **Sync Settings**: Configure what syncs and when
- **Test Connection**: Verify everything is working

## Features

### ✅ Two-Way Sync
- CRM events → Google Calendar
- Google Calendar events → CRM

### ✅ Auto-Sync
- Automatic sync every 15 minutes
- Manual sync option available

### ✅ Event Details
- Event title and description
- Date and time
- Location information
- Email reminders

### ✅ Multiple Views
- Month view
- Week view  
- Day view

### ✅ Mobile Friendly
- Works on all devices
- Touch-friendly interface

## Troubleshooting

### Connection Issues
1. Check your internet connection
2. Verify Gmail account credentials
3. Ensure calendar permissions are granted
4. Try disconnecting and reconnecting

### Sync Issues
1. Check sync settings in Account Settings
2. Verify event data is complete
3. Test sync manually first
4. Check browser console for errors

### Mobile Issues
1. Use mobile browser or PWA
2. Ensure touch gestures work
3. Test on different devices

## Security Notes

### Data Protection
- All settings stored locally
- No sensitive data transmitted
- Secure Google OAuth authentication

### Permissions
- Calendar read/write access
- Email for notifications
- Profile information (email only)

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify Google Calendar API is enabled
3. Contact support with specific error messages
4. Test with a different Gmail account

## Next Steps

Once connected:
1. Create your first event in CRM
2. Check Google Calendar to see the sync
3. Configure auto-sync preferences
4. Set up team calendar sharing if needed

---

**Note**: This integration requires a Google account with Calendar access. For production use, you'll need to set up proper Google API credentials. 