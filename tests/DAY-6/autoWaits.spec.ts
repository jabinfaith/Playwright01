/**
 * auto-wait
 * actionability check
 * 
 * to click on web element
 * 
 * Before performing the action,
 * 1. visible on the web page
 * 2. stable
 * 3. receive the events - check any other element overlays on it
 * 4. enabled
 * 5. editable
 * 
 * 
 */



import {test,expect} from "@playwright/test";

test('TC 002 auto waits', async ({page})=>{

    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    buttonToClick.click();

    const hiddenButton = cardToSelect.getByRole("button").filter({hasText:"I am here"});
    await expect(hiddenButton).toBeVisible({timeout:15000});
await page.waitForTimeout(5000);

})

