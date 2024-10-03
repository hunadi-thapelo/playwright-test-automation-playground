import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=> {
   await page.goto('http://localhost:4200/');

   // Expect a url "to contain" a substring.
   await expect(page).toHaveURL(/.*dashboard/);
   await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
})

test('Verify that Option 1 radio button is clickable', async({page}) => {
    
    //Finds child element within same method locator
    await test.step('Click on Option 1 radio button', async () => {
        const firstRadioButton = page.locator('nb-card nb-radio :text-is("Option 1")');
        await firstRadioButton.click();
 });

})