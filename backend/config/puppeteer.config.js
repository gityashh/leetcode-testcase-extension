const puppeteer = require('puppeteer');

async function scrapeTest() {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-zygote',
      '--single-process',
    ]
  });

  const page = await browser.newPage();
  await page.goto('https://leetcode.com/problems/two-sum/description/', { waitUntil: 'domcontentloaded' });

//   const heading = await page.evaluate(() => {
//     return document.querySelector('h1').innerText;
    //   });
    
    const content = await page.content();

  ;
  return content;
}

scrapeTest().then(console.log).catch(console.error);