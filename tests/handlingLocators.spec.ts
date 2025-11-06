import { test, expect } from './fixtures';

// test.beforeEach(async ({page})=> {
//    await page.goto('http://localhost:4200/');

//    // Expect a url "to contain" a substring.
//    await expect(page).toHaveURL(/.*dashboard/);
//    await page.getByText('Forms').click();
//    await page.getByText('Form Layouts').click();
// })

test('Handle locator syntax rules', async({page}) => {

   await test.step('Fill in Inline Form with a valid full name', async () => {
          //by tag name
   const clickFullNameField = page.locator('input[placeholder="Jane Doe"]');
   await clickFullNameField.fill('John Smith');
   });

   await test.step('Fill in Inline Form with a valid email address', async () => {
   //by attribute
   const firstEmailField = page.locator('[placeholder="Email"]').first();
   await firstEmailField.fill('johnsmith@email-example.com');
   });

})

test('Handle user facing locators', async({page}) => {

    //get by label
    await test.step('Fill in Using the Grid with a valid email address', async () => {
   const handleEmailFieldByLabel = page.getByLabel('Email').first();
   await handleEmailFieldByLabel.fill('johndoe@email-example.com');
    });

   //get by label
   await test.step('Click on the "Sign In" button', async () => {
   const handleButtonByRole = page.getByRole('button', {name:"Sign in"}).first();
   await handleButtonByRole.click();
   });

})