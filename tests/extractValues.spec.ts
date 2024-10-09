import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=> {
   await page.goto('http://localhost:4200/');

   // Expect a url "to contain" a substring.
   await expect(page).toHaveURL(/.*dashboard/);
   await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
})

test('Extract values and assert', async({page}) => {
    const blockForm = page.locator('nb-card').filter({hasText: "Block form"});
    //extract button text and store in variable
    const buttonText = await blockForm.locator('button').textContent();

    await test.step('Assert a single text value', async () => {
        //single text value
        expect(buttonText).toEqual('Submit');
    });
    
});