import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const MailUser = faker.internet.email();
//const PhoneUser = faker.phone.number();
const telephone = faker.number.int({min: 1000000, max:9999999})
const idenUser = faker.number.int({min:1000, max:9999});
const CompteBancaire = faker.string.alphanumeric();

test.beforeEach(async({ page})=>{

  await page.goto('https://app-dev.mossall.com/auth/login');
  await page.getByLabel('Email').fill('genieouzog+atos@gmail.com');
  await page.getByLabel('Mot de passe').fill('$Mossal1234');
  await page.getByRole('button', { name: 'Se connecter' }).click();

})
//Login Mossal
test('get started link', async ({ page }) => {
    
    //ajouter un nouveau collaborateur
    await page.getByText('Collaborateurs').click();
    await page.getByRole('button', { name: 'Ajouter un collaborateur' }).click();
    await expect(page.getByText('Création compte collaborateur' )).toBeVisible();

    await page.getByLabel('Prénom').fill('El Mamadou');
    await page.getByPlaceholder ('Doe').fill('FALL');
   // await page.locator('#address').fill('awa+testplayright@agiltoo.fr');
    await page.locator('#address').fill(MailUser);
   // await page.getByLabel('Téléphone').fill('775555555');
    //await page.getByLabel('Téléphone').fill(PhoneUser);
    await page.getByLabel('Téléphone').fill('78' +telephone.toString());
    await page.getByLabel('Fonction').fill('Manager');
    await page.locator('#birthDate').fill('2000-01-02');
   // await page.getByLabel('Identifiant unique').fill('20010014');
    await page.getByLabel('Matricule').fill(idenUser.toString());
    await page.getByLabel('Salaire').fill('555000');
    //await page.getByLabel('N° Compte Bancaire').fill('1110012');
    await page.getByLabel('N° Compte Bancaire').fill(CompteBancaire);

    await page.getByRole('combobox').selectOption({index: 0});
    await page.getByRole('button', { name: 'Envoyé' }).click();
    /////////////////////////////////////////////////////////////////////////////////////////

  });



   test('test update demande', async ({ page }) => {
  
   
    await page.getByText('Liste des demandes').click();
    await page.getByText('Statut').click();
    await page.getByText('Validée').click();
    await page.getByText('Liste des demandes').click();
    //utilisation d'une classe précéder d'un (.)
    await page.locator('.dropdown > .mat-icon').first().click();
    //utilisation id précéder d'un #
    await page.locator('#dropdown-statut').getByText('Validée').click();
    await page.getByRole('row').nth(1).locator('mat-icon').click();
    await page.getByRole('cell', { name: 'Validée Remboursée' }).locator('span').nth(2).click({ timeout: 10000 });
    
  
    await page.locator('.btn-edit-statut > .text').first().click();
    await page.getByText('Remboursée').nth(1).click();   
    await page.getByRole('button', { name: 'Confirmer' }).click();
    //await page.getByRole('button', { name: 'cancel' });
    

    
  });



  test.afterEach(async ({ page }) => {
    await page.getByText('arrow_drop_down').click();
    await page.getByText('Déconnexion').click();
  });
  
  


