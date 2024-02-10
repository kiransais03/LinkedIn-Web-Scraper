const puppeteer = require('puppeteer');

console.log("Hi puppeteer is working.")

async function browsepage (namesarr) {
  const browser = await puppeteer.launch({ headless: false,});
  const page = await browser.newPage();
  
  await page.goto('https://www.linkedin.com/login');
  await page.type('#username', 'kiransais03@gmail.com');
  await page.type('#password', 'gottikadu123');
  await page.click('.btn__primary--large');
  await page.waitForSelector('.feed-identity-module__actor-meta', { timeout: 0 });
  console.log("Reached")

for(let i=0;i<namesarr.length;i++) {
  await page.click('.search-global-typeahead__collapsed-search-button');
  await page.type('.search-global-typeahead__input',namesarr[i]);
  await page.keyboard.press('Enter');
  const btn = await page.waitForSelector('button.search-navigation-panel__button', { timeout: 0 });
   await page.evaluate(async () => {
     if (btn) {
       await btn.click();
   };
 })
  }

}



module.exports = {browsepage}
