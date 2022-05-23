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
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/tags' }*/),
    page.locator('text=Tags').click()
  ]); 
  await page.locator('a:has-text("Tags")').click();
  await page.locator('text=New tag').click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('titulo correcto');
  await page.locator('input[type="color"]').click();
  await page.locator('[placeholder="\\31 5171A"]').fill('gggg');
  await page.locator('button:has-text("Save")').click();

})