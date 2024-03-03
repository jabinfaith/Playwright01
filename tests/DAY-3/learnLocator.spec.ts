//css selector
//  id attribute --> #attribute
//id="username" --> #username


import {test,chromium, firefox} from "@playwright/test";

test('Launching the browser',async({page})=>{


//creating browser reference
//const browser = await chromium.launch({headless:false,channel:"chrome"});

//Launch the incognito window browserContext
//const browserContext = await browser.newContext();

//Launch page
//const page = await browserContext.newPage();

//load url
await page.goto('http://leaftaps.com/opentaps/control/main');

await page.locator("#username").fill("demosalesManager");

await page.locator("#password").fill("crmsfa");

//another way
//await page.fill("#password","crmsfa");

await page.locator(".decorativeSubmit").click();

console.log(await page.title());

console.log(page.url());

await page.waitForTimeout(5000);




//wait time
await page.waitForTimeout(15000);

}

)