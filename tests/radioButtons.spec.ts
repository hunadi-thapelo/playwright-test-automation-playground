import { test, expect } from './fixtures';


test('Handling radio buttons', async({page}) =>{

    const usingTheGridForm = page.locator('nb-card').filter({hasText: "Using the Grid"});
    await usingTheGridForm.getByRole('radio', {name:'Option 1'}).check({force: true})
    expect(usingTheGridForm.getByLabel('Option 1')).toBeChecked()

})