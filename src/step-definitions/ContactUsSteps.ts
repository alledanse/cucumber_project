import { Then, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

When('I type a first name', async () => {
  await pageFixture.page.getByPlaceholder('First Name').fill('Joe');
});

When('I type a last name', async () => {
  await pageFixture.page.getByPlaceholder('Last Name').fill('Peach');
});

When('I enter an email address', async () => {
  await pageFixture.page.getByPlaceholder('Email Address').fill('joe_peach88@gmail.com');
});

When('I type a comment', async () => {
  await pageFixture.page.getByPlaceholder('Comments').fill('It should be some comment here.');
});

When('I click on the submit button', async () => {
  await pageFixture.page.waitForSelector('input[value="SUBMIT"]', { timeout: 10000 });
  await pageFixture.page.locator('input[value="SUBMIT"]').click(); // getByRole('button', { name: 'SUBMIT' })
});

Then('I should be presented with a successful contact us submission message', async () => {
  await pageFixture.page.waitForSelector('#contact_reply h1', { timeout: 15000 });
  const headerText = await pageFixture.page.innerText('#contact_reply h1');
  expect(headerText).toBe('Thank You for your Message!');
});

Then('I should be presented with a unsuccessful contact us message', async () => {
  await pageFixture.page.waitForSelector('body', { timeout: 10000 });
  const bodyText = await pageFixture.page.innerText('body');
  expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);
});

When('I type a specific first name {string}', async (firstName: string) => {
  await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
});
When('I type a specific last name {string}', async (lastName: string) => {
  await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
});
When('I enter a specific email address {string}', async (email: string) => {
  await pageFixture.page.getByPlaceholder('Email Address').fill(email);
});
When(
  'I type a specific text {string} and number {int} within the comment input field',
  async (text: string, number: number) => {
    await pageFixture.page.getByPlaceholder('Comments').fill(`${text}  ${number}`);
  },
);

When('I type a random first name', async () => {
  const randomFirstName = faker.person.firstName();
  await pageFixture.page.getByPlaceholder('First Name').fill(randomFirstName);
});
When('I type a random last name', async () => {
  const randomLastName = faker.person.lastName();
  await pageFixture.page.getByPlaceholder('Last Name').fill(randomLastName);
});
When('I enter a random email address', async () => {
  const randomEmail = faker.internet.email();
  await pageFixture.page.getByPlaceholder('Email Address').fill(randomEmail);
});
