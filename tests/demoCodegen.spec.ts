import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-dev.mossall.com/auth/login');
  await page.getByPlaceholder('awafall@mossal.com').click();
  await page.getByPlaceholder('awafall@mossal.com').fill('genieouzog+atos@gmail.com');
  await page.getByPlaceholder('entrer votre mot de passe').click();
  await page.getByPlaceholder('entrer votre mot de passe').fill('$Mossal1234');
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await page.getByText('Administrateurs').click();
  await page.getByRole('button', { name: '+ Ajouter un admin' }).click();
  await page.getByPlaceholder('John', { exact: true }).click();
  await page.getByPlaceholder('John', { exact: true }).fill('Mariama');
  await page.getByPlaceholder('Doe').click();
  await page.getByPlaceholder('Doe').fill('GAYE');

  await page.getByPlaceholder('john@gmail.com').fill('awa+magiltoo@agiltoo.fr');

  await page.getByPlaceholder('770000000').fill('779999900');

  await page.getByLabel('Fonction *').fill('Technicienne');

  await page.getByLabel('Identifiant unique *').fill('778800');

  await page.getByLabel('Salaire *').fill('700000');
 
  await page.getByLabel('N° Compte Bancaire *').fill('250000');
  await page.getByRole('button', { name: 'Envoyé' }).click();
});