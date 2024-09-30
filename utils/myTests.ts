import {test as base } from '@playwright/test';
import { CollaboratorPage } from '../pages/CollaboratorPage';
import { BasePage } from '../pages/BasePage';
import { DemandePage } from '../pages/DemandePage';


type TestFixtures = {
    basePage: BasePage
    collaboratorPage: CollaboratorPage
    demandePage: DemandePage
}


export const test = base.extend<TestFixtures>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await basePage.goto();
        await basePage.login('genieouzog+atos@gmail.com', '$Mossal1234');
        await use(basePage);
        await basePage.logout();
    },

    collaboratorPage: async ({ basePage }, use) => {
        const collaboratorPage = new CollaboratorPage(basePage.page);
        await use(collaboratorPage);
    },

    demandePage: async ({ basePage }, use) => {
        const demandePage = new DemandePage(basePage.page);
        await use(demandePage);
    },

});


export { expect } from '@playwright/test';