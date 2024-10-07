import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=> {
   await page.goto('http://localhost:4200/');

   // Expect a url "to contain" a substring.
   await expect(page).toHaveURL(/.*dashboard/);
   await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
})

test('Verify filling in Using the Grid form', async({page}) => {
    
    await test.step('Click on email input field', async () => {
        await page.locator('nb-card', { hasText: "Using the Grid"}).getByLabel('Email').click();
    });
    //Using a second attribute
    await test.step('Click on password input field', async () => {
        await page.locator('nb-card', { has: page.locator('#inputPassword2')}).getByRole('textbox', {name: "Password"}).click();
    });

});

test('Verify filling in Basic form card', async({page}) => {
    
    //Using the filter method
    await test.step('Fill in email for basic form card', async () => {
        await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"})
            .fill("test@email-example.com");
    });

    //Using a locator as a filter with the filter method
    //using something unique on page e.g color of button
    await test.step('Fill in password for basic form card', async () => {
        await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"})
            .fill("passwrd321");
    });    

});