
export const WELCOME_TEXT = 'Welcome back';
export const SIGN_INTO_ACCOUNT_TEXT = 'Sign into your account below';
export const SIGN_UP_TEXT = 'Need an account first? Sign Up.';
export const LOGIN_URL = 'https://happy-field-011ab7b10.2.azurestaticapps.net/login.html';

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailField = page.getByPlaceholder('Enter Email');
        this.passwordField = page.getByPlaceholder('Enter Password');
        this.forgotPassword = page.getByRole('link', { name: 'Forgot password?' });
        this.signInButton = page.getByRole('link', { name: 'Sign In' });
        this.signInWithIntuit = page.getByRole('button', { name: 'Sign in with Intuit' });
        this.signUp = page.getByRole('link', { name: 'Sign Up' });
        this.welcomeBack = page.getByRole('heading', { name: 'Welcome back' });
        this.signInText = page.getByText('Sign into your account below');
        this.needAccountText = page.getByText('Need an account first? Sign Up.');
    }

    /**
     * This method takes email and password as parameters and signs in the user.
     * @param email 
     * @param password 
     */
    async signIn(email, password) {
        await this.emailField.click();
        await this.emailField.fill(email);
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.signInButton.click();
    }
}