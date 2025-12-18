import { Given, When } from '@cucumber/cucumber';
import logger from '../logger/logger';
import { BasePage } from '../page-objects/base/BasePage';

const url = 'https://www.webdriveruniversity.com';
const basePage = new BasePage();

Given('I navigate to the webdriveruniversity homepage', async () => {
  try {
    await basePage.navigate(url);
    logger.info(`Accessing URL: ${url}`);
  } catch (error) {
    logger.error(`An error has occured: ${error.message}`);
  }
});

When('I click on the contact us button', async () => {
  await basePage.wailtAndClickByRole('link', 'Contact Us Form');
});

When('I click on the login portal button', async () => {
  await basePage.wailtAndClickByRole('link', 'Login Portal');
});

When('I switch the new browser tab', async () => {
  await basePage.switchToTheNewTab();
});

//'I navigate to the webdriveruniversity homepage'
// await pageFixture.page.goto(url);

//'I click on the contact us button'
// const contactUsButton = pageFixture.page.getByRole('link', {
//   name: 'Contact US Contact Us Form',
// });
// await contactUsButton.click();

//'I click on the login portal button'
// const contactUsButton = pageFixture.page.getByRole('link', {
//   name: 'LOGIN PORTAL Login Portal',
// });
// await contactUsButton.click();

//'I switch the new browser tab'
// await pageFixture.context.waitForEvent('page', { timeout: 10000 });

// const allPages = pageFixture.context.pages();
// pageFixture.page = allPages[allPages.length - 1];
// await pageFixture.page.bringToFront();
// await pageFixture.page.setViewportSize({ width: config.width, height: config.height });
