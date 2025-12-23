import { Then, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

let alertText: string;

const loginPage = new LoginPage();

When('I type a username {word}', async (username: string) => {
  // await pageFixture.page.getByPlaceholder('Username').fill(username);
  await loginPage.fillUsername(username);
  await loginPage.page.waitForTimeout(1000);
});

When('I type a password {word}', async (password: string) => {
  // await pageFixture.page.getByPlaceholder('Password').fill(password);
  await loginPage.fillPassword(password);
  await loginPage.page.waitForTimeout(1000);
});

When('I click on the login button', async () => {
  loginPage.page.on('dialog', async (alert) => {
    alertText = alert.message();
    await alert.accept();
  });

  // const loginButton = pageFixture.page.locator('#login-button');
  // await loginButton.hover();
  // await loginButton.click({ force: true });
  await loginPage.clickOnLoginButton();
  await loginPage.page.waitForTimeout(1000);
});

Then(
  'I should be presented with an alert box which contains text {string}',
  async (expectedAlertText: string) => {
    expect(alertText).toBe(expectedAlertText);
  },
);
