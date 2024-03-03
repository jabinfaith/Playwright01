import {test,chromium, firefox} from "@playwright/test";

test('Launching the browser',async()=>{


//creating browser reference
const browser = await chromium.launch({headless:false,channel:"chrome"});

//Launch the incognito window browserContext
const browserContext = await browser.newContext();

//Launch page
const page = await browserContext.newPage();

//load url
await page.goto('https://www.google.co.in');

//wait time
await page.waitForTimeout(15000);

}

)