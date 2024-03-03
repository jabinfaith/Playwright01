/**
 * Assertions
 * 1.Retrying Assertions- retry till it is succeed for polling time
 * 2.Non-retrying Assertions - no auto retry
 * 
 * Types:
 * Page assertions
 * Locator assertions
 * APIResponse assertions
 * generic assertions
 * 
 * 
 */
import {expect, test} from "@playwright/test"
import { TIMEOUT } from "dns";

test('TC001 Assertions', async({page})=> {

    await page.goto("https://leafground.com/input.xhtml");

    await page.waitForTimeout(5000);


    const typeName = page.getByPlaceholder("Babu");

    await page.waitForTimeout(5000);

    await expect.soft(typeName).toBeEnabled();
    await page.waitForTimeout(5000);

    await typeName.fill("Testing123");

    await page.waitForTimeout(10000);

    await page.fill("[name='j_idt88:j_idt91']","India");

    await page.waitForTimeout(10000);
    /**
     * hard assert - when assertion fails, it stops whole test is failed
     * soft assert - when assertion fails, it wont stop and move with next step, but still testcase fails * 
     * 
     * 
     */


})