function doPost(e) {
  if (!e || !e.parameter) {
    return ContentService.createTextOutput("Error: No form data received").setMimeType(ContentService.MimeType.TEXT);
  }
  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  sheet.appendRow([
    e.parameter['fname'], 
    e.parameter['email'], 
    e.parameter['message'], 
    new Date()
  ]);

  // Email notification
  var subject = 'New Contact Us Submission from Zenith';
  var body = 'Received a new contact form submission:\n\n' +
             'Name: ' + e.parameter['fname'] + '\n' +
             'Email: ' + e.parameter['email'] + '\n' +
             'Message: ' + e.parameter['message'];
  MailApp.sendEmail('vickymayilsamy@gmail.com', subject, body);
  MailApp.sendEmail('pradeepmarimuthu777@gmail.com', subject, body);
  MailApp.sendEmail('vishalkannan070@gmail.com', subject, body);
  MailApp.sendEmail('sathurnithys@gmail.com', subject, body);
  MailApp.sendEmail('prasathgiri2004@gmail.com', subject, body);

  // Enable CORS for React frontend
  return ContentService.createTextOutput(JSON.stringify({ status: 'Success' })).setMimeType(ContentService.MimeType.JSON);
}
