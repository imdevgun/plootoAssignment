export const DASHBOARD_URL = 'https://happy-field-011ab7b10.2.azurestaticapps.net/dashboard.html';
export const PAYMENT_APPROVALS_URL = 'https://happy-field-011ab7b10.2.azurestaticapps.net/payment_approvals.html';
export const PENDING_PAYMENTS_URL = 'https://happy-field-011ab7b10.2.azurestaticapps.net/pending_payments.html';
export const PLOOTO_INSTANT = 'Plooto Instant';
export const BALANCE = 'Balance';

export const PAYMENT_APPROVALS_HEADING = 'Payment approvals';
export const PAYMENT_APPROVALS_STATEMENT = 'These payments need you or your team members authorization before they can be debited.';
export const PAYMENT_APPROVALS_CONTACT_HEADING = 'Contact';
export const PAYMENT_APPROVALS_RDD = 'Requested Debit Date';
export const PAYMENT_APPROVALS_AMOUNT_HEADING = 'Amount';

export const PENDING_PAYMENTS_IN_TRANSIT_TEXT = 'Payments currently in transit';
export const PENDING_PAYMENTS_DESCRIPTION = 'These payables and receivables are ongoing but not yet complete. Track the payment progress through the status bar.';
export const PENDING_PAYMENTS_CONTACT_HEADING = 'Contact';
export const PENDING_PAYMENTS_STATUS_HEADING = 'Status';
export const PENDING_PAYMENTS_RDD = 'RequestedDebit Date'; // This is not a typo. The value is correct.
export const PENDING_PAYMENTS_EDD = 'Estimated Delivery Date';
export const PENDING_PAYMENT_AMOUNT_HEADING = 'Amount';

export class Dashboard {
    constructor(page) {
        this.page = page;
        this.verificationItems = page.getByRole('link', { name: 'Verification Items' });
        this.setUpPayments = page.getByRole('link', { name: 'Set Up Payments' });
        this.paymentApprovals = page.getByRole('link', { name: 'Payment Approvals' });
        this.pendingPayments = page.getByRole('link', { name: 'Pending Payments' });
        this.completedPayments = page.getByRole('link', { name: 'Completed Payments' });
        this.foreignExchangeCalculator = page.getByRole('link', { name: 'Foreign Exchange Calculator' });
        this.connectAccountingSoftware = page.getByRole('link', { name: 'Connect your accounting software' });
        this.companyVerificationSteps = page.getByRole('link', { name: 'Click here to finish company verification steps and unlock the full power of Plooto.' });
        this.plootoInstant = page.getByText('Plooto Instant');
        this.balance = page.getByText('Balance');
        this.addFunds = page.getByRole('button', { name: 'Add Funds' });
        this.submitFeedback = page.getByRole('button', { name: 'Submit' });

        this.paymentApprovalsHeading = page.getByRole('heading', { name: 'Payment approvals' });
        this.paymentApprovalsStatement = page.getByText('These payments need you or your team members authorization before they can be debited');
        this.paymentsAwaitingApproval = page.getByRole('tab', { name: 'Payments Awaiting My Approval' });
        this.allPaymentsAwaitingApproval = page.getByRole('tab', { name: 'All Payments Awaiting Approval' });
        this.paymentApprovalsContactHeading = page.getByRole('cell', { name: 'Contact' });
        this.paymentApprovalsRequestedDebitDate = page.getByRole('cell', { name: 'Requested Debit Date' });
        this.paymentApprovalsAmountHeading = page.getByRole('cell', { name: 'Amount' });

        this.pendingPaymentsInTransitText = page.getByRole('heading', { name: 'Payments currently in transit' });
        this.pendingPaymentsDescription = page.getByText('These payables and receivables are ongoing but not yet complete. Track the payment progress through the status bar.');
        this.pendingPaymentsPayables = page.getByRole('tab', { name: 'Pending Payables' });
        this.pendingPaymentsReceivables = page.getByRole('tab', { name: 'Pending Receivables' });
        this.pendingPaymentsContactHeading = page.getByRole('cell', { name: 'Contact' });
        this.pendingPaymentsStatusHeading = page.getByRole('cell', { name: 'Status' });
        this.pendingPaymentsRequestedDebitDateHeading = page.getByRole('cell', { name: 'Requested Debit Date' });
        this.pendingPaymentsEstimaedDeliveryDateHeading = page.getByRole('cell', { name: 'Estimated Delivery Date' });
        this.pendingPaymentsAmountHeading = page.getByRole('cell', { name: 'Amount' });
    }
}