import { test, expect } from './fixtures';



test('Should select list-items from dropdown', async ({ page }) => {

    const dropDownMenu = page.locator('ngx-header nb-select button')
    const optionList = page.getByRole('list').locator('nb-option');
    const header = page.locator('nb-layout-header');


    await test.step('Click on drop down menu', async () => {
        await dropDownMenu.click()
    })

    await test.step('Verify list items on the drop down menu', async () => {
        await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])

        await optionList.filter({ hasText: 'Cosmic' }).click()
    })

    await test.step('Verify header background colour change as expected', async () => {
        await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')

        //create a plain object to loop through all background colour
        const colours = {
            "Light": "rgb(255, 255, 255)",
            "Dark": "rgb(34, 43, 69)",
            "Cosmic": "rgb(50, 50, 89)",
            "Corporate": "rgb(255, 255, 255)"
        }

        await dropDownMenu.click()

        //use an For in loop to select the colour and check rgb
        for (const colour in colours) {
            await optionList.filter({ hasText: colour }).click()
            await expect(header).toHaveCSS('background-color', colours[colour])
            if (colour != "Corporate")
                await dropDownMenu.click()
        }
    })
})