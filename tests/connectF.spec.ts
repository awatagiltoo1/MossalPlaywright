import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const MailUser = faker.internet.email();
//const PhoneUser = faker.phone.number();
const telephone = faker.number.int({min: 1000000, max:9999999})
const idenUser = faker.number.int({min:1000, max:9999});
const CompteBancaire = faker.string.alphanumeric();
async function login(page) {
    await page.goto('https://app-dev.mossall.com/auth/login');
    await page.getByLabel('Email').fill('genieouzog+atos@gmail.com');
    await page.getByLabel('Mot de passe').fill('$Mossal1234');
    await page.getByRole('button', { name: 'Se connecter' }).click();    
}

async function logout(page) {
    await page.getByText('arrow_drop_down').click();
    await page.getByText('Déconnexion').click();  
}

async function AccesCollab(page) {
  await page.getByText('Collaborateurs').click();
}

test.beforeEach(async({ page})=>{
await login(page);

})
//Login Mossal
test('get started link', async ({ page }) => {
   
    //ajouter un nouveau collaborateur
    await page.getByText('Collaborateurs').click();
    await page.getByRole('button', { name: 'Ajouter un collaborateur' }).click();
    await expect(page.getByText('Création compte collaborateur' )).toBeVisible();

    await page.getByLabel('Prénom').fill('El Mamadou');
    await page.getByPlaceholder ('Doe').fill('FALL');
 
    await page.locator('#address').fill(MailUser);

    await page.getByLabel('Téléphone').fill('78' +telephone.toString());
    await page.getByLabel('Fonction').fill('Manager');
    await page.locator('#birthDate').fill('2000-01-02');
   
    await page.getByLabel('Identifiant unique').fill(idenUser.toString());
    await page.getByLabel('Salaire').fill('550000');

    await page.getByLabel('N° Compte Bancaire').fill(CompteBancaire);

    await page.getByRole('combobox').selectOption({index: 0});
    await page.getByRole('button', { name: 'Envoyé' }).click();


  });
  
 //Modification collaborateur avec fonction
test('update collab', async ({ page }) => {
  await AccesCollab(page);
 await page.getByRole('row').locator('mat-icon').first().click();
  await page.locator('#dropdown-action > div > span:nth-child(2)').first().click();
  ////////////////////////
  await expect(page.getByText('Modifier les infos du collaborateur' )).toBeVisible();

  await page.locator('#prenom').fill('Mayel');
  await page.locator ('#nom').fill('DIAGNE');

  await page.getByRole('button', { name: 'Sauvegarder' }).click();
  await AccesCollab(page);
  ///////////////////////////////
    

  });


  test.afterEach(async ({ page }) => {
  
    await logout(page);

  });

 

  
  


