import {test,expect} from "@playwright/test";

test('TC 004 auto waits', async ({page})=>{

    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Text Change"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    buttonToClick.click();

    const hiddenButton = cardToSelect.getByRole("button").filter({hasText:"Did you notice?"});
    await expect(hiddenButton).toBeVisible({timeout:15000});
await page.waitForTimeout(5000);

})

