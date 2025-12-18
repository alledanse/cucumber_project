import { Then, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { ContactUsPage } from '../page-objects/ContactUsPage';

const contactUsPage = new ContactUsPage();

When('I type a first name', async () => {
  // await pageFixture.page.getByPlaceholder('First Name').fill('Joe');
  await contactUsPage.fillFirstName('Joe');
});

When('I type a last name', async () => {
  // await pageFixture.page.getByPlaceholder('Last Name').fill('Peach');
  await contactUsPage.fillLastName('Peach');
});

When('I enter an email address', async () => {
  // await pageFixture.page.getByPlaceholder('Email Address').fill('joe_peach88@gmail.com');
  await contactUsPage.fillEmailAddress('joe_peach88@gmail.com');
});

When('I type a comment', async () => {
  // await pageFixture.page.getByPlaceholder('Comments').fill('It should be some comment here.');
  await contactUsPage.fillComment('It should be some comment here.');
});

When('I click on the submit button', async () => {
  // await pageFixture.page.waitForSelector('input[value="SUBMIT"]', { timeout: 10000 });
  // await pageFixture.page.locator('input[value="SUBMIT"]').click(); // getByRole('button', { name: 'SUBMIT' })
  await contactUsPage.clickOnSubmitButton();
});

Then('I should be presented with a successful contact us submission message', async () => {
  // await pageFixture.page.waitForSelector('#contact_reply h1', { timeout: 15000 });
  // const headerText = await pageFixture.page.innerText('#contact_reply h1');
  // expect(headerText).toBe('Thank You for your Message!');
  const successMessage = await contactUsPage.getSuccessfulMessage();
  expect(successMessage).toBe('Thank You for your Message!');
});

Then('I should be presented with a unsuccessful contact us message', async () => {
  // await pageFixture.page.waitForSelector('body', { timeout: 10000 });
  // const bodyText = await pageFixture.page.innerText('body');
  // expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);
  const errorMessage = await contactUsPage.getErrorMessage();
  expect(errorMessage).toMatch(/Error: (all fields are required|Invalid email address)/);
});

When('I type a specific first name {string}', async (firstName: string) => {
  // await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
  await contactUsPage.fillFirstName(firstName);
});
When('I type a specific last name {string}', async (lastName: string) => {
  // await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
  await contactUsPage.fillLastName(lastName);
});
When('I enter a specific email address {string}', async (email: string) => {
  // await pageFixture.page.getByPlaceholder('Email Address').fill(email);
  await contactUsPage.fillEmailAddress(email);
});
When(
  'I type a specific text {string} and number {int} within the comment input field',
  async (text: string, number: number) => {
    // await pageFixture.page.getByPlaceholder('Comments').fill(`${text}  ${number}`);
    await contactUsPage.fillComment(`${text}  ${number}`);
  },
);

When('I type a random first name', async () => {
  const randomFirstName = faker.person.firstName();
  // await pageFixture.page.getByPlaceholder('First Name').fill(randomFirstName);
  await contactUsPage.fillFirstName(randomFirstName);
});
When('I type a random last name', async () => {
  const randomLastName = faker.person.lastName();
  // await pageFixture.page.getByPlaceholder('Last Name').fill(randomLastName);
  await contactUsPage.fillLastName(randomLastName);
});
When('I enter a random email address', async () => {
  const randomEmail = faker.internet.email();
  // await pageFixture.page.getByPlaceholder('Email Address').fill(randomEmail);
  await contactUsPage.fillEmailAddress(randomEmail);
});

When(
  'I type a first name {word} and a last name {word}',
  async (firstName: string, lastName: string) => {
    // await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
    // await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
    await contactUsPage.fillFirstName(firstName);
    await contactUsPage.fillLastName(lastName);
  },
);

When(
  'I type a email address {string} and a comment {string}',
  async (email: string, comment: string) => {
    // await pageFixture.page.getByPlaceholder('Email Address').fill(email);
    // await pageFixture.page.getByPlaceholder('Comments').fill(comment);
    await contactUsPage.fillEmailAddress(email);
    await contactUsPage.fillComment(comment);
  },
);

Then('I should be presented with a header text {string}', async (message: string) => {
  // await pageFixture.page.waitForSelector('//h1 | //body', { state: 'visible' });
  // const elements = await pageFixture.page.locator('//h1 | //body').elementHandles();
  // let foundElementText = '';

  // for (let element of elements) {
  //   let text = await element.innerText();

  //   if (text.includes(message)) {
  //     foundElementText = text;
  //     break;
  //   }
  // }
  // expect(foundElementText).toContain(message);
  const headerText = await contactUsPage.getHeaderText(message);
  expect(headerText).toContain(message);
});
