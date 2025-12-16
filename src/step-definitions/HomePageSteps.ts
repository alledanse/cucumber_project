import { Given, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { config as loadEnv } from 'dotenv';
import logger from '../logger/logger';

const env = loadEnv({ path: './env/.env' });

const config = {
  width: parseInt(env.parsed?.BROWSER_WIDTH || '1920'),
  height: parseInt(env.parsed?.BROWSER_HEIGHT || '1080'),
};

const url = 'https://www.webdriveruniversity.com';

Given('I navigate to the webdriveruniversity homepage', async () => {
  try {
    await pageFixture.page.goto(url);
    logger.info(`Accessing URL: ${url}`);
  } catch (error) {
    logger.error(`An error has occured: ${error.message}`);
  }
});

When('I click on the contact us button', async () => {
  const contactUsButton = pageFixture.page.getByRole('link', {
    name: 'Contact US Contact Us Form',
  });
  await contactUsButton.click();
});

When('I click on the login portal button', async () => {
  const contactUsButton = pageFixture.page.getByRole('link', {
    name: 'LOGIN PORTAL Login Portal',
  });
  await contactUsButton.click();
});

When('I switch the new browser tab', async () => {
  await pageFixture.context.waitForEvent('page', { timeout: 10000 });

  const allPages = pageFixture.context.pages();
  pageFixture.page = allPages[allPages.length - 1];
  await pageFixture.page.bringToFront();
  await pageFixture.page.setViewportSize({ width: config.width, height: config.height });
});
