import { Then, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';

let alertText: string;

When('I type a username {word}', async (username: string) => {
  await pageFixture.page.getByPlaceholder('Username').fill(username);
  await pageFixture.page.waitForTimeout(1000);
});

When('I type a password {word}', async (password: string) => {
  await pageFixture.page.getByPlaceholder('Password').fill(password);
  await pageFixture.page.waitForTimeout(1000);
});

When('I click on the login button', async () => {
  pageFixture.page.on('dialog', async (alert) => {
    alertText = alert.message();
    await alert.accept();
  });

  const loginButton = pageFixture.page.locator('#login-button');
  await loginButton.hover();
  await loginButton.click({ force: true });
  await pageFixture.page.waitForTimeout(1000);
});

Then(
  'I should be presented with an alert box which contains text {string}',
  async (expectedAlertText: string) => {
    expect(alertText).toBe(expectedAlertText);
  },
);
