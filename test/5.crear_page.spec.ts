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
  await page.locator('a:has-text(".page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:")').click();
  await page.locator('text=New page').click();
  await page.goto('http://localhost:2368/ghost/#/editor/page/628a9ba7c3140128d4ee637a');
  await page.locator('.koenig-editor__editor').press('Enter');
  await page.locator('text=nueva pagina').click();

})