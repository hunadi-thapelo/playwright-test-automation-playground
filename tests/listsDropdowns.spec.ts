import { test, expect } from './fixtures';



test('Should select list-items from dropdown', async ({ page }) => {

    await test.step('Click on drop down menu', async () => {
        const dropDownMenu = page.locator('ngx-header nb-select button')
        await dropDownMenu.click()
    })

    await test.step('Verify list items on the drop down menu', async () => {
        const optionList = page.getByRole('list').locator('nb-option');
        await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])
    })







})