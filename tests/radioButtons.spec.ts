import { test, expect } from './fixtures';



    test('Validate that Option 1 radio button is checked', async({page}) =>{

        await test.step('Check Option 1 radio button', async () => {
            const usingTheGridForm = page.locator('nb-card').filter({hasText: "Using the Grid"});
            await usingTheGridForm.getByRole('radio', {name:'Option 1'}).check({force: true})
            expect(usingTheGridForm.getByLabel('Option 1')).toBeChecked()
        })
    })

