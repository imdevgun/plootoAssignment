export const PAYMENT_APPROVAL_URL = 'https://happy-field-011ab7b10.2.azurestaticapps.net/payment_approval.html';

export const SENT_PAYMENT_DETAILS_TEXT = 'Sent Payment Details';
export const SENT_PAYMENT_DETAILS_CONTACT = 'Contact :';
export const SENT_PAYMENT_DETAILS_AMOUNT = 'Amount :';
export const SENT_PAYMENT_DETAILS_EXCHANGE_RATE = 'Exchange Rate :';
export const SENT_PAYMENT_DETAILS_RDD = 'Requested Debit Date :';
export const SENT_PAYMENT_DETAILS_STATUS = 'Status :';
export const SENT_PAYMENT_DETAILS_INITIATED_BY = 'Initiated By :';
export const SENT_PAYMENT_DETAILS_ECD = 'Estimated Credit Date';

export const PAYMENT_ATTACHMENTS = 'Payment Attachments';

export const PAYMENT_APPROVAL_HISTORY = 'Payment Approval History';
export const PAYMENT_APPROVAL_HISTORY_TEAM_MEMBER = 'Team Member';
export const PAYMENT_APPROVAL_HISTORY_STATUS = 'Status';
export const PAYMENT_APPROVAL_HISTORY_DECISION_DATE = 'Decision Date';

export const AUDIT_TRAIL = 'Audit Trail';

export const PAYMENT_LINE_ITEMS = 'Payment Line Items';

export const PAYMENT_APPROVAL_ADDITIONAL_DETAILS = 'Additional Details';

export class Payables {
    constructor(page) {
        this.page = page;
        this.sentPaymentDetailsText = page.getByText('Sent Payment Details');
        this.sentPaymentDetailsExport = page.getByRole('link', { name: 'Export PDF' });
        this.sentPaymentDetailsEdit = page.getByRole('link', { name: 'Edit' });
        this.sentPaymentDetailsDelete = page.getByRole('link', { name: 'Delete' });
        this.sentPaymentDetailsContact = page.getByText('Contact :');
        this.sentPaymentDetailsAmount = page.getByText('Amount :');
        this.sentPaymentDetailsExchangeRate = page.getByText('Exchange Rate :');
        this.sentPaymentDetailsRequestedDebitDate = page.getByText('Requested Debit Date :');
        this.sentPaymentDetailsStatus = page.getByText('Status :');
        this.sentPaymentDetailsInitiatedBy = page.getByText('Initiated By :');
        this.sentPaymentDetailsEstimatedCreditDate = page.getByText('Estimated Credit Date');

        this.paymentAttachments = page.getByText('Payment Attachments');

        this.paymentApprovalHistory = page.getByText('Payment Approval History');
        this.paymentApprovalHistoryTeamMember = page.getByRole('cell', { name: 'Team Member' });
        this.paymentApprovalHistoryStatus = page.getByRole('row', { name: 'Team Member Status Decision Date' }).getByRole('cell', { name: 'Status' });
        this.paymentApprovalHistoryDecisionDate = page.getByRole('cell', { name: 'Decision Date' });
        this.paymentApprovalHistoryApprove = page.getByRole('button', { name: 'Approve' });
        this.paymentApprovalHistoryReject = page.getByRole('button', { name: 'Reject' });

        this.auditTrail = page.getByText('Audit Trail');

        this.paymentLineItems = page.getByText('Payment Line Items');

        this.paymentApprovalAdditionalDetails = page.getByText('Additional Details');

    }



}