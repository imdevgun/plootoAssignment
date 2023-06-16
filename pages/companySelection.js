export const COMPANY_SELECTION_URL = 'https://happy-field-011ab7b10.2.azurestaticapps.net/company_select.html#';
export const COMPANY_NAME_HEADER = 'Company Name';
export const STATUS_HEADER = 'Status';
export const OUTSTANDING_ITEMS_HEADER = 'Outstanding Items';

export class CompanySelection {
    constructor(page) {
        this.page = page;
        this.companyName = page.getByRole('tab', { name: 'Plooto Inc.' });
        this.searchForCompany = page.getByRole('textbox', { name: 'Search for Company ...' });
        this.addNewClient = page.getByRole('button', { name: ' Add New Client ' });
        this.companyNameHeader = page.getByRole('cell', { name: 'Company Name' });
        this.statusHeader = page.getByRole('cell', { name: 'Status' });
        this.outstandingItemsHeader = page.getByRole('cell', { name: 'Outstanding Items' });
    }

}
