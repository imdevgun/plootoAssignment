import { test, expect } from '@playwright/test';
import { AUDIT_TRAIL, PAYMENT_APPROVAL_ADDITIONAL_DETAILS, PAYMENT_APPROVAL_HISTORY, PAYMENT_APPROVAL_HISTORY_DECISION_DATE, PAYMENT_APPROVAL_HISTORY_STATUS, PAYMENT_APPROVAL_HISTORY_TEAM_MEMBER, PAYMENT_APPROVAL_RECENT_TRANSACTIONS, PAYMENT_APPROVAL_URL, PAYMENT_ATTACHMENTS, PAYMENT_LINE_ITEMS, Payables, SENT_PAYMENT_DETAILS_AMOUNT, SENT_PAYMENT_DETAILS_CONTACT, SENT_PAYMENT_DETAILS_ECD, SENT_PAYMENT_DETAILS_EXCHANGE_RATE, SENT_PAYMENT_DETAILS_INITIATED_BY, SENT_PAYMENT_DETAILS_RDD, SENT_PAYMENT_DETAILS_STATUS, SENT_PAYMENT_DETAILS_TEXT } from "../pages/payables";
import { Base } from "../pages/base";

/**
 * This method checks for all non-interactable elements via text comparison
 */

test('Check all elements text is displayed on the login screen', async ({ page }) => {

    const payables = new Payables(page);
    const base = new Base(page);
    await page.goto(PAYMENT_APPROVAL_URL);
    await base.checkText(payables.sentPaymentDetailsText, SENT_PAYMENT_DETAILS_TEXT);
    await base.checkText(payables.sentPaymentDetailsContact, SENT_PAYMENT_DETAILS_CONTACT);
    await base.checkText(payables.sentPaymentDetailsAmount, SENT_PAYMENT_DETAILS_AMOUNT);
    await base.checkText(payables.sentPaymentDetailsExchangeRate, SENT_PAYMENT_DETAILS_EXCHANGE_RATE);
    await base.checkText(payables.sentPaymentDetailsRequestedDebitDate, SENT_PAYMENT_DETAILS_RDD);
    await base.checkText(payables.sentPaymentDetailsStatus, SENT_PAYMENT_DETAILS_STATUS);
    await base.checkText(payables.sentPaymentDetailsInitiatedBy, SENT_PAYMENT_DETAILS_INITIATED_BY);
    await base.checkText(payables.sentPaymentDetailsEstimatedCreditDate, SENT_PAYMENT_DETAILS_ECD);

    await base.checkText(payables.paymentAttachments, PAYMENT_ATTACHMENTS);

    await base.checkText(payables.paymentApprovalHistory, PAYMENT_APPROVAL_HISTORY);
    await base.checkText(payables.paymentApprovalHistoryTeamMember, PAYMENT_APPROVAL_HISTORY_TEAM_MEMBER);
    await base.checkText(payables.paymentApprovalHistoryStatus, PAYMENT_APPROVAL_HISTORY_STATUS);
    await base.checkText(payables.paymentApprovalHistoryDecisionDate, PAYMENT_APPROVAL_HISTORY_DECISION_DATE);

    await base.checkText(payables.auditTrail, AUDIT_TRAIL);

    await base.checkText(payables.paymentLineItems, PAYMENT_LINE_ITEMS);

    await base.checkText(payables.paymentApprovalAdditionalDetails, PAYMENT_APPROVAL_ADDITIONAL_DETAILS);

});

/**
 * This method checks for all interactable elements via visibility of element on DOM
 */

test('check all interactable elements are displayed on the login screen', async ({ page }) => {

    const payables = new Payables(page);
    const base = new Base(page);
    await page.goto(PAYMENT_APPROVAL_URL);

    await base.checkText(payables.sentPaymentDetailsExport);
    await base.checkText(payables.sentPaymentDetailsEdit);
    await base.checkText(payables.sentPaymentDetailsDelete);

    await base.checkText(payables.paymentApprovalHistoryApprove);
    await base.checkText(payables.paymentApprovalHistoryReject);
});

/**
 * This method compares screenshot of the webpage with the image stored inside the repository
 */

test('compare screenshot with original payment approval page screen', async ({ page }) => {
    await page.goto(PAYMENT_APPROVAL_URL);
    await expect(page).toHaveScreenshot();
}) 