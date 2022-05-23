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
  await page.locator('#ember34 circle').click();
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/settings/general' }*/),
    page.locator('text=Basic publication details and site metadata').click()
  ]);
  await page.locator('text=Pruebas Automatizadas Dashboard .view-site_svg__a{fill:none;stroke:currentColor; >> div[role="button"]').click();
  await page.locator('text=Your profile').click();
  await page.locator('textarea').click();
  await page.locator('textarea').fill('este texto contiene mas de 256 caracteres, por lo cual es muy largo y se utiliza para mostrar la frontera que se puede tener para los diferentes campos de Ghost, ya sean positivos y negativos para hacer una prueba más eficaz tambien sirve para poder entender el ejercicio. este texto contiene mas de 256 caracteres, por lo cual es muy largo y se utiliza para mostrar la frontera que se puede tener para los diferentes campos de Ghost, ya sean positivos y negativos para hacer una prueba más eficaz tambien sirve para poder entender el ejercicio.');
  await page.locator('textarea').press('Tab');


})