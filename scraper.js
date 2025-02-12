require('dotenv').config();
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const siteUrl = process.env.SITE_URL;
  await page.goto(siteUrl, {
    waitUntil: 'networkidle2',
  });

  await page.waitForSelector("[data-testid='dSRPLocFilter']", {
    timeout: 60000,
  });

  const cities = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll("[data-testid='dSRPLocFilter'] label span")
    )
      .map((el) => el.innerText.trim())
      .filter((text) => text.length > 0);
  });

  console.log('List:', cities);

  fs.writeFileSync('cities.json', JSON.stringify(cities, null, 2));

  console.log('Data has been saved in cities.json');

  await browser.close();
})();
