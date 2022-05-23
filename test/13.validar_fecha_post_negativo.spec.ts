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
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/posts' }*/),
    page.locator('#ember26').click()
  ]);
  await page.locator('text=New post').click();
  await page.locator('.settings-menu-toggle').click();
  await page.locator('[placeholder="YYYY-MM-DD"]').click();
  await page.locator('[placeholder="YYYY-MM-DD"]').fill('2022-15-25');
  await page.locator('[placeholder="YYYY-MM-DD"]').press('Tab');

 
})