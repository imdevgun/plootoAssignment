import { test, expect } from '@playwright/test';

import { LOGIN_URL, LoginPage, SIGN_INTO_ACCOUNT_TEXT, SIGN_UP_TEXT, WELCOME_TEXT } from '../pages/login';
import { Base } from '../pages/base';

test('Sign in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const base = new Base(page);
    await base.goToUrl(LOGIN_URL);
    await loginPage.signIn('test', 'pass');

});

/**
 * This method checks for all non-interactable elements via text comparison
 */
test('Check all elements text is displayed on the login screen', async ({ page }) => {
    const base = new Base(page);
    const loginPage = new LoginPage(page);
    await page.goto(LOGIN_URL);
    await base.checkText(loginPage.welcomeBack, WELCOME_TEXT);
    await base.checkText(loginPage.signInText, SIGN_INTO_ACCOUNT_TEXT);
    await base.checkText(loginPage.needAccountText, SIGN_UP_TEXT);
});

/**
 * This method checks for all interactable elements via visibility of element on DOM
 */

test('check all interactable elements are displayed on the login screen', async ({ page }) => {
    const base = new Base(page);
    const loginPage = new LoginPage(page);
    await page.goto(LOGIN_URL);
    await base.checkText(loginPage.emailField);
    await base.checkText(loginPage.passwordField);
    await base.checkText(loginPage.forgotPassword);
    await base.checkText(loginPage.signInButton);
    await base.checkText(loginPage.signInWithIntuit);
    await base.checkText(loginPage.signUp);
});

/**
 * This method compares screenshot of the webpage with the image stored inside the repository
 */

test('compare screenshot with original login page screen', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await expect(page).toHaveScreenshot();
}) 