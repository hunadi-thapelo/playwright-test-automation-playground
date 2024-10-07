import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=> {
   await page.goto('http://localhost:4200/');

   // Expect a url "to contain" a substring.
   await expect(page).toHaveURL(/.*dashboard/);
   await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
})

test('Verify Horizontal form', async({page}) => {
    //ideal exmaple using XPath approach to level one up and find child element
    await test.step('Click on email input field', async () => {
        await page.locator(':text-is("Horizontal form")').locator('..').getByRole('textbox', {name: "Email"}).click();
    });

});