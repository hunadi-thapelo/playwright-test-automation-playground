import { test, expect } from './fixtures';



    test('Validate that Option 1 radio button is checked', async({page}) =>{

        const usingTheGridForm = page.locator('nb-card').filter({hasText: "Using the Grid"});
        const radioButtonStatus = usingTheGridForm.getByRole('radio', {name:'Option 1'}).isChecked();

        await test.step('Check Option 1 radio button', async () => {
            await usingTheGridForm.getByRole('radio', {name:'Option 1'}).check({force: true});
            expect(radioButtonStatus).toBeTruthy();
            await expect(usingTheGridForm.getByLabel('Option 1')).toBeChecked();

        })
    })

