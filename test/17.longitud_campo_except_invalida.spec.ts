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
  await page.locator('[placeholder="YYYY-MM-DD"]').fill('2022-05-25');
  await page.locator('[placeholder="YYYY-MM-DD"]').press('Tab');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('08:05');
  await page.locator('textarea[name="post-setting-custom-excerpt"]').click();
  await page.locator('textarea[name="post-setting-custom-excerpt"]').fill('este texto contiene mas de 256 caracteres, por lo cual es muy largo y se utiliza para mostrar la frontera que se puede tener para los diferentes campos de Ghost, ya sean positivos y negativos para hacer una prueba más eficaz tambien sirve para poder entender el ejercicio. este texto contiene mas de 256 caracteres, por lo cual es muy largo y se utiliza para mostrar la frontera que se puede tener para los diferentes campos de Ghost, ya sean positivos y negativos para hacer una prueba más eficaz tambien sirve para poder entender el ejercicio.');
  await page.locator('textarea[name="post-setting-custom-excerpt"]').press('Tab');

 
})