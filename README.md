# LinkedIn Web Scraper :

### Deployed Link :

#### https://linkedin-web-scraper-backend.onrender.com/

##### Technologies Used : Node.js,Express.js,Puppeteer

#### Dev Tools : VS Code,Github,Render

#### Working Procedure :
-- This backend service is used to Scrape data from the LinkedIn for the given Company Names and Convert all the data to CSV File and dowload.
-- Here we need to make an API Call With POST 'https://linkedin-web-scraper-backend.onrender.com/getdata' with Body data as 
Ex. 
{
    "namesarr":["Acciojob"]
}
-- After getting all the data by using Web Scraping with Puppeteer Library then a CSV File will be created with that and will be downloaded

### Steps Required To Run Applications :
#### Backend :

--"npm install"
     For install all the depencies and packages in the "node-modules" folder.

--"npm install --force"
    If any version conflicts use "--force" flag to  install all the depencies and packages in the "node-modules" folder.

--"node index.js"
   To start and run the server.  
   Open http://localhost:8080 to view it in your browser.
