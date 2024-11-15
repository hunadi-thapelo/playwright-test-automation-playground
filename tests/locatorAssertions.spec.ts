import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=> {
   await page.goto('http://localhost:4200/');

   // Expect a url "to contain" a substring.
   await expect(page).toHaveURL(/.*dashboard/);
   await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
})

test('locator assertions', async({page}) => {

    const buttonText = page.locator('nb-card').filter({hasText: "Block form"}).locator('button');


    await test.step('Assert text using locator assertion', async () => {
        //locator assertion
       await expect(buttonText).toHaveText('Submit')

       //soft assertion - considered not good practice but can be used to validate other assertions and fixing your tests
       //await expect.soft(buttonText).toHaveText('Submitt'); //commented out - code used for learning purposes
       await buttonText.click();

    });

});


//will always wait - default wait timeout is up to 5 seconds
//Has details about your application