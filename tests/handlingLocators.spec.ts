import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=> {
   await page.goto('http://localhost:4200/');

   // Expect a url "to contain" a substring.
   await expect(page).toHaveURL(/.*dashboard/);
   await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
})

test('Handle locator syntax rules', async({page}) => {

    //by tag name
   const clickFullNameField = page.locator('input[placeholder="Jane Doe"]');
   await clickFullNameField.fill('John Smith');

   //by attribute
   const firstEmailField = page.locator('[placeholder="Email"]').first();
   await firstEmailField.fill('johnsmith@email-example.com');

})

test('Handle user facing locators', async({page}) => {

    //get by label
   const handleEmailFieldByLabel = page.getByLabel('Email').first();
   await handleEmailFieldByLabel.fill('johndoe@email-example.com');

   //get by label
   const handleButtonByRole = page.getByRole('button', {name:"Sign in"}).first();
   await handleButtonByRole.click();
})