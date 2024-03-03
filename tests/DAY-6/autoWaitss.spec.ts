import {test,expect} from "@playwright/test";

test('TC 003 auto waits', async ({page})=>{

    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Invisibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    buttonToClick.click();

    const hiddenButton = cardToSelect.getByRole("button").filter({hasText:"I am about to hide"});
    await expect(hiddenButton).toBeHidden({timeout:15000});
await page.waitForTimeout(5000);

})

