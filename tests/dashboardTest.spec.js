import { test } from '@playwright/test';
import { BALANCE, DASHBOARD_URL, Dashboard, PAYMENT_APPROVALS_AMOUNT_HEADING, PAYMENT_APPROVALS_CONTACT_HEADING, PAYMENT_APPROVALS_HEADING, PAYMENT_APPROVALS_RDD, PAYMENT_APPROVALS_STATEMENT, PAYMENT_APPROVALS_URL, PENDING_PAYMENTS_CONTACT_HEADING, PENDING_PAYMENTS_DESCRIPTION, PENDING_PAYMENTS_EDD, PENDING_PAYMENTS_IN_TRANSIT_TEXT, PENDING_PAYMENTS_RDD, PENDING_PAYMENTS_STATUS_HEADING, PENDING_PAYMENTS_URL, PENDING_PAYMENT_AMOUNT_HEADING, PLOOTO_INSTANT } from "../pages/dashboard";
import { expect } from '@playwright/test';
import { Base } from '../pages/base';

/**
 * This method checks for all non-interactable elements via text comparison
 */
test('Check all elements text is displayed on the login screen', async ({ page }) => {

    const dashboard = new Dashboard(page);
    const base = new Base(page);
    await page.goto(DASHBOARD_URL);
    await base.checkText(dashboard.plootoInstant, PLOOTO_INSTANT);
    await base.checkText(dashboard.balance, BALANCE);


});

/**
 * This method checks for all interactable elements via visibility of element on DOM
 */

test('check all interactable elements are displayed on the login screen', async ({ page }) => {

    const dashboard = new Dashboard(page);
    const base = new Base(page);
    await page.goto(DASHBOARD_URL);
    await base.checkText(dashboard.verificationItems);
    await base.checkText(dashboard.connectAccountingSoftware);
    await base.checkText(dashboard.setUpPayments);
    await base.checkText(dashboard.paymentApprovals);
    await base.checkText(dashboard.pendingPayments);
    await base.checkText(dashboard.completedPayments);
    await base.checkText(dashboard.foreignExchangeCalculator);
    await base.checkText(dashboard.addFunds);
    await base.checkText(dashboard.submitFeedback);
});

/**
 * This method checks for avaiable funds to the user
 */
test('check funds', async ({ page }) => {
    await page.goto(DASHBOARD_URL);
    let val = await page.getByRole('heading', { name: 'USD' }).textContent();
    console.log("Amound of Funds available = " + val);
})

/**
 * This method checks all payment approvals elements that are non-interactable via text comparison
 */
test('check payment approvals text elements', async ({ page }) => {
    const base = new Base(page);
    const dashboard = new Dashboard(page);
    await page.goto(PAYMENT_APPROVALS_URL);
    await base.checkText(dashboard.paymentApprovalsHeading, PAYMENT_APPROVALS_HEADING);
    await base.checkText(dashboard.paymentApprovalsStatement, PAYMENT_APPROVALS_STATEMENT);
    await base.checkText(dashboard.paymentApprovalsContactHeading, PAYMENT_APPROVALS_CONTACT_HEADING);
    await base.checkText(dashboard.paymentApprovalsRequestedDebitDate, PAYMENT_APPROVALS_RDD);
    await base.checkText(dashboard.paymentApprovalsAmountHeading, PAYMENT_APPROVALS_AMOUNT_HEADING)
})

/**
 * This method checks all payment approvals elemetns that are interactable via visibility
 */

test('check payment approvals interactable elements', async ({ page }) => {
    const base = new Base(page);
    const dashboard = new Dashboard(page);
    await page.goto(PAYMENT_APPROVALS_URL);
    await base.checkText(dashboard.paymentsAwaitingApproval);
    await base.checkText(dashboard.allPaymentsAwaitingApproval);
})

/**
 * This method checks all pending payments elements that are non-interactable via text comparison
 */
test('check pending payments text elements', async ({ page }) => {
    const base = new Base(page);
    const dashboard = new Dashboard(page);
    await page.goto(PENDING_PAYMENTS_URL);
    await base.checkText(dashboard.pendingPaymentsInTransitText, PENDING_PAYMENTS_IN_TRANSIT_TEXT);
    await base.checkText(dashboard.pendingPaymentsDescription, PENDING_PAYMENTS_DESCRIPTION);
    await base.checkText(dashboard.pendingPaymentsContactHeading, PENDING_PAYMENTS_CONTACT_HEADING);
    await base.checkText(dashboard.pendingPaymentsStatusHeading, PENDING_PAYMENTS_STATUS_HEADING);
    await base.checkText(dashboard.pendingPaymentsRequestedDebitDateHeading, PENDING_PAYMENTS_RDD);
    await base.checkText(dashboard.pendingPaymentsEstimaedDeliveryDateHeading, PENDING_PAYMENTS_EDD);
    await base.checkText(dashboard.pendingPaymentsAmountHeading, PENDING_PAYMENT_AMOUNT_HEADING);
})

/**
 * This method checks all pending payments elemetns that are interactable via visibility
 */
test('check pending payments interactable elements', async ({ page }) => {
    const base = new Base(page);
    const dashboard = new Dashboard(page);
    await page.goto(PENDING_PAYMENTS_URL);
    await base.checkText(dashboard.pendingPaymentsPayables);
    await base.checkText(dashboard.pendingPaymentsReceivables);
})

/**
 * This method compares screenshot of the webpage with the image stored inside the repository
 */
test('compare screenshot with original login page screen', async ({ page }) => {
    await page.goto(DASHBOARD_URL);
    await expect(page).toHaveScreenshot();
}) 
