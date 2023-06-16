import { test, expect } from '@playwright/test';
import { COMPANY_NAME_HEADER, COMPANY_SELECTION_URL, CompanySelection, OUTSTANDING_ITEMS_HEADER, STATUS_HEADER } from '../pages/companySelection';
import { Base } from '../pages/base';

/**
 * This method checks for all non-interactable elements via text comparison
 */
test('Check all elements text is displayed on the login screen', async ({ page }) => {
    const companySelection = new CompanySelection(page);
    const base = new Base(page);
    await page.goto(COMPANY_SELECTION_URL);
    await base.checkText(companySelection.companyNameHeader, COMPANY_NAME_HEADER);
    await base.checkText(companySelection.statusHeader, STATUS_HEADER);
    await base.checkText(companySelection.outstandingItemsHeader, OUTSTANDING_ITEMS_HEADER);
});

/**
 * This method checks for all interactable elements via visibility of element on DOM
 */
test('check all interactable elements are displayed on the login screen', async ({ page }) => {
    const companySelection = new CompanySelection(page);
    const base = new Base(page);
    await page.goto(COMPANY_SELECTION_URL);
    await base.checkText(companySelection.companyName);
    await base.checkText(companySelection.searchForCompany);
    await base.checkText(companySelection.addNewClient);
});

/**
 * This method compares screenshot of the webpage with the image stored inside the repository
 */
test('compare screenshot with original company selection page screen', async ({ page }) => {
    await page.goto(COMPANY_SELECTION_URL);
    await expect(page).toHaveScreenshot();
}) 
