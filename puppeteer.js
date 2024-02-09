const puppeteer = require('puppeteer');

console.log("Hi puppeteer is working.")

async function browsepage () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.linkedin.com/company/alcax/about/');
  
  await browser.close();
}

module.exports = {browsepage}
