import { test} from '@playwright/test';

test('basic test', async ({ page}) => {
  await page.goto('http://localhost:2368/ghost');
  await page.locator('[placeholder="jamie\\@example\\.com"]').click();
  await page.locator('[placeholder="jamie\\@example\\.com"]').fill('rh.rodriguezr1@uniandes.edu.co');
  await page.locator('[placeholder="•••••••••••••••"]').click();
  await page.locator('[placeholder="•••••••••••••••"]').fill('Ingeniero62');
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/dashboard' }*/),
    page.locator('button:has-text("Sign in →")').click()
  ]);
  await page.locator('#ember30').click();
  await page.locator('text=New member').click(),
  await page.locator('input[name="name"]').fill('marco');
  await page.locator('input[name="name"]').press('Tab')
  await page.locator('input[name="email"]').fill('miro@gmail.com');
  await page.locator('textarea[name="note"]').click();
  await page.locator('textarea[name="note"]').click();
  await page.locator('textarea[name="note"]').fill('este texto contiene menosde 256 caracteres');

})