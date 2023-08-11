### This repository contains a basic setup for an Express server using Handlebars as the template engine.<br><br>It provides a way to update sendgrid templates using VSCode, making it easier to read and maintain.<br><br>

**Follow these steps to set up and run the Express server:**

1. Clone the Repository:<br>
   git clone https://github.com/your-username/your-handlebars-repo.git<br>
   cd your-handlebars-repo<br>

2. Install Dependencies:<br>
   yarn<br>

3. Run the Server:<br>
   yarn start<br>
   The server will start and be accessible at http://localhost:3000.<br>

**How to Retrieve SendGrid Template Code**

1. Run the Server:<br>
   Before retrieving the code, make sure the server is running using the steps above.<br>

2. View the Page Source:<br>
   Open your web browser and navigate to http://localhost:3000. Right-click on the page and select "View Page Source" or "Inspect." This will open the browser's developer tools.<br>

3. Copy the HTML Code:<br>
   In the developer tools, find the code you want to use for the SendGrid template. Select and copy the relevant code.<br>

4. Paste into SendGrid Template:<br>
   Log in to your SendGrid account. Create or edit an email template. In the "<> Code" section, paste the copied HTML code.<br>

5. View and Test:<br>
   Check for updates in the view section and test it with your email campaign.<br>

**How to Format Handlebars Files**

1. With Prettier Installed, Change the Extension to .html (example.handlebars -> example.html).

2. Save the Document (If Using 'Format on Save' Setting in VSCode) Which Should Format Code Correctly.

3. Revert Extension Back To .handlebars (example.html -> example.handlebars)
