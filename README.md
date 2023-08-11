### This repository contains a basic setup for an Express server using Handlebars as the template engine.<br><br>It provides a way to update sendgrid templates using VSCode, making it easier to read and maintain.<br><br>

**Follow these steps to set up and run the Express server:**

1. Clone the Repository:
   git clone https://github.com/your-username/your-handlebars-repo.git
   cd your-handlebars-repo

2. Install Dependencies:
   yarn

3. Run the Server:
   yarn start
   The server will start and be accessible at http://localhost:3000.

**How to Retrieve SendGrid Template Code**

1. Run the Server:
   Before retrieving the code, make sure the server is running using the steps above.

2. View the Page Source:
   Open your web browser and navigate to http://localhost:3000. Right-click on the page and select "View Page Source" or "Inspect." This will open the browser's developer tools.

3. Copy the HTML Code:
   In the developer tools, find the code you want to use for the SendGrid template. Select and copy the relevant code.

4. Paste into SendGrid Template:
   Log in to your SendGrid account. Create or edit an email template. In the "<> Code" section, paste the copied HTML code.

5. View and Test:
   Check for updates in the view section and test it with your email campaign.

**How to Format Handlebars Files**

1. With Prettier Installed, Change the Extension to .html (example.handlebars -> example.html).

2. Save the Document (If Using 'Format on Save' Setting in VSCode) Which Should Format Code Correctly.

3. Revert Extension Back To .handlebars (example.html -> example.handlebars)
