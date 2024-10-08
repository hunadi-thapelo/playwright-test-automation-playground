import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=> {
   await page.goto('http://localhost:4200/');

   // Expect a url "to contain" a substring.
   await expect(page).toHaveURL(/.*dashboard/);
   await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
})

test('E2E: Verify filling in the Inline form with valid details', async({page}) => {
    const inLineForm = page.locator('nb-card').filter({hasText: "Inline form"});
    const fullNameTextBox = inLineForm.getByRole('textbox', {name: "Jane Doe"});
    const emailTextBox = inLineForm.getByRole('textbox', {name: "Email"});
    const checkBox =  inLineForm.locator('nb-checkbox');
    const checkBoxChecked =  checkBox.locator('label span').first();

    
    await test.step('Fill in firstname and lastname', async () => {
        await fullNameTextBox.fill("Sarah Smith");
        await expect(fullNameTextBox).toHaveValue("Sarah Smith");
    });

    await test.step('Fill in email', async () => {
        await emailTextBox.fill("sarah.smith@email-example.com");
        await expect(emailTextBox).toHaveValue("sarah.smith@email-example.com");
    });
    
    await test.step('Click on the remember me checkbox ', async () => {
        await checkBox.click();
        //Checkbox is checked
        await expect(checkBoxChecked).toHaveAttribute('class', 'custom-checkbox checked');
    });

    await test.step('Click on the submit button ', async () =>  {
        await inLineForm.getByRole('button').click();

    });
    
});