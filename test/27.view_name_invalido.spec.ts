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
  await page.locator('a:has-text(".view-site_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-line")').click();
  await page.frameLocator('iframe').frameLocator('iframe').locator('div:has-text(".cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;")').nth(1).click();
  await page.frameLocator('iframe').frameLocator('#ghost-portal-root div iframe').locator('[placeholder="Jamie Larson"]').fill('este texto contiene mas de 256 caracteres, por lo cual es muy largo y se utiliza para mostrar la frontera que se puede tener para los diferentes campos de Ghost, ya sean positivos y negativos para hacer una prueba más eficaz tambien sirve para poder entender el ejercicio. este texto contiene mas de 256 caracteres, por lo cual es muy largo y se utiliza para mostrar la frontera que se puede tener para los diferentes campos de Ghost, ya sean positivos y negativos para hacer una prueba más eficaz tambien sirve para poder entender el ejercicio.');
  await page.frameLocator('iframe').frameLocator('#ghost-portal-root div iframe').locator('[placeholder="jamie\\@example\\.com"]').click();
  await page.frameLocator('iframe').frameLocator('#ghost-portal-root div iframe').locator('[placeholder="jamie\\@example\\.com"]').fill('123@gmelin.com');
  await page.frameLocator('iframe').frameLocator('#ghost-portal-root div iframe').locator('text=Sign up').click();


})

