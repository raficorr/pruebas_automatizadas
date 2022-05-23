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
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/editor/post/' }*/),
    page.locator('.koenig-editor__editor').click(),
    await page.locator('text=Add feature image Upload el comienzo nuevo').click(),
     ])
})