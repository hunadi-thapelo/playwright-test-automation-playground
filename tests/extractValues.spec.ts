import { test, expect } from './fixtures';

// test.beforeEach(async ({page})=> {
//    await page.goto('http://localhost:4200/');

//    // Expect a url "to contain" a substring.
//    await expect(page).toHaveURL(/.*dashboard/);
//    await page.getByText('Forms').click();
//    await page.getByText('Form Layouts').click();
// })

test('Extract values and assert', async({page}) => {

    const blockForm = page.locator('nb-card').filter({hasText: "Block form"});
    const usingTheGridForm = page.locator('nb-card').filter({hasText: "Using the Grid"});

    //extract button text and store in variable
    const buttonText = await blockForm.locator('button').textContent();
    //extract radio button labels text and store in variable
    const radioButtonLabels = await usingTheGridForm.locator('nb-radio').allTextContents();



    await test.step('Assert a single text value', async () => {
        //single text value
        expect(buttonText).toEqual('Submit');
    });

    await test.step('Extracts all text values and asserts with contains', async () => {
        //all text values
        expect(radioButtonLabels).toContain("Option 1");
    });

});

test('Extract input textfield values and assert', async({page}) => {
    const usingTheGridForm = page.locator('nb-card').filter({hasText: "Using the Grid"});
    const inputEmailData = usingTheGridForm.getByRole('textbox', {name:"Email"});

    //input values
    await test.step('Extracts email input value and asserts', async () => {

        await inputEmailData.fill('johndoe@email-example.com');
        const emailDataStored = await inputEmailData.inputValue();
        expect(emailDataStored).toEqual('johndoe@email-example.com');
    });

});