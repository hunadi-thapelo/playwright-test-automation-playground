import { test, expect } from '@playwright/test';

test('the first test', async ({page})=> {
   await page.goto('http://localhost:4200/');

   // Expect a url "to contain" a substring.
   await expect(page).toHaveURL(/.*dashboard/);
})