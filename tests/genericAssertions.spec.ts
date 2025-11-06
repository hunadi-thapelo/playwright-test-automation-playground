import { test, expect } from './fixtures';

test('assert a value', async ({ page }) => {
  const value = 1;
  expect(value).toBe(1);
});

test('assert results', async ({ page }) => {

const result = 2 + 2
expect(result).toBe(4);

});

test('assert result with toContain(expected)', async ({ page }) => {

    const text = "Hello, John Snow M!";
    expect(text).toContain('Snow');
    expect(text).toContain('!');
});

test('assert array with toContain(expected)', async ({ page }) => {
    
    const numArray = [10, 22, 34]
    expect(numArray).toContain(22);
    expect(new Set(numArray)).toContain(34);
});

test('assert value has length property equal to expected', async ({ page }) => {
    
    expect('Hello Hi! 123').toHaveLength(13); //counts spaces
    expect([1, 2, 3, 10, 11, 1000]).toHaveLength(6);
});


test('assert buton text',async ({page}) => {
        await page.goto('http://localhost:4200/');
     
        // Expect a url "to contain" a substring.
        await expect(page).toHaveURL(/.*dashboard/);
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
   
    const form = page.locator('nb-card').filter({hasText: "Block form"});
    const buttonText = await form.locator('button').textContent();
    expect(buttonText).toEqual('Submit');
})
//Execute immediately
//Give you instant results
//Don't know squat about your app
//Take two arguments and run with them
//Do exactly what you tell them, no questions asked