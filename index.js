const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
require('./puppeteer');
const {browsepage} = require('./puppeteer');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');

app.use(express.json());

app.use(cors({origin:"*"}));

app.get('/',async (req,res)=>{
    // await browsepage()
    res.status(200).send(
        "<h1>For LinkedIn Data Scraping call POST API 'https://linkedin-web-scraper-backend.onrender.com/senddata' with Body as Array of Company Names like ['Google','Dell']</h1>")
})


app.post('/senddata',async (req,res)=>{
    let {namesarr} = req.body;
    console.log(namesarr);

    res.status(200).send({
        status : 200,
        message : "Data received"
    })

    browsepage(namesarr)
})


app.get('/getdata',async (req,res)=>{

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: 'company details file.csv',
        header: [
            {id: 'companyname', title: 'COMPANY NAME'},
            {id: 'websitelink', title: 'WEBSITE LINK'},
            {id: 'linkedinpageurl', title: 'LINKEDIN URL'},
            {id: 'ceoname', title: 'CEO'},
            {id: 'ceoemail', title: 'CEO EMAIL'},
            {id: 'ceophone', title: 'CEO PH.NO'},
            {id: 'cfoname', title: 'CFO'},
            {id: 'cfoemail', title: 'CFO EMAIL'},
            {id: 'cfophone', title: 'CXO PH.NO'},
            {id: 'cxoname', title: 'CXO'},
            {id: 'cxoemail', title: 'CXO EMAIL'},
            {id: 'cxophone', title: 'CXO PH.NO'},
        ]
    });
     
    const records = [
        {companyname: 'KIran',  ceoname: 'French, English'},
    ];
     
    csvWriter.writeRecords(records)       // returns a promise
        .then(() => {
            console.log('...Done');
            res.download('./company details file.csv');
        });
        
        
})

app.listen('8080',()=>{
    console.log("Server is running at PORT : 8080")
})