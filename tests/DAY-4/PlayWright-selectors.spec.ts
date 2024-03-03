import {test,chromium} from "@playwright/test"




test('Learning Playwright Selector',async()=>{

   // test.setTimeout(150000);

    const browser = await chromium.launch({headless:false,channel:"chrome"});
    
    const browserContext = await browser.newContext();
    

    const page = await browserContext.newPage();



    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.waitForTimeout(5000);

    const credentials=page.locator("[class='inputLogin']");
    await page.waitForTimeout(3000);
    credentials.nth(0).fill("demosalesManager");
    await page.waitForTimeout(3000);
    credentials.nth(1).fill("crmsfa");
    await page.waitForTimeout(3000);
    await page.click(".decorativeSubmit");
    await page.waitForTimeout(3000);
    await page.click("//a[@style='color: black;']");

    //await page.waitForTimeout(8000);

   // console.log(await page.title());
}

)