const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://app-dev.mossall.com/auth/login');
  await page.getByPlaceholder('awafall@mossal.com').click();
  await page.getByPlaceholder('awafall@mossal.com').fill('genieouzog+atos@gmail.com');
  await page.getByPlaceholder('entrer votre mot de passe').click();
  await page.getByPlaceholder('entrer votre mot de passe').fill('$Mossal1234');
  await page.getByRole('button', { name: 'Se connecter' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();