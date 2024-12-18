import { faker } from '@faker-js/faker';
import {test, expect } from '../utils/myTests';

//import { CollaboratorPage } from '../pages/CollaboratorPage';

const email = faker.internet.email();
const prenom = faker.person.firstName();
const nom = faker.person.lastName();
//const password = faker.internet.password();
const identifiant = faker.number.int({ min: 1000, max: 9999 })
const telephone = faker.number.int({min: 1000000, max:9999999})
const birthdayDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
const birthday = birthdayDate.toISOString().split('T')[0];
//const phoneNumber = faker.phone.number('76#######');


test.only('@KAN-1 Ajout collaborateur', async ({ collaboratorPage, page}) => {
    await collaboratorPage.addCollaborator(prenom, nom, email, '77' +telephone.toString(), birthday, identifiant.toString(), 'Testeur', '2000000', '123456789', 'WAVE');
});


test('valider une demande', async ({ demandePage, page}) => {
    expect(page.url()).toBe('https://app-dev.mossall.com/auth/login');
    await demandePage.validerUneDemande();
});
//XSP-33


