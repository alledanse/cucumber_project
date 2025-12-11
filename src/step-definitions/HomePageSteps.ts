import { Given, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';

const url = 'https://www.webdriveruniversity.com';

Given('I navigate to the webdriveruniversity homepage', async () => {
  await pageFixture.page.goto(url);
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
  await pageFixture.context.waitForEvent('page');

  const allPages = pageFixture.context.pages();
  pageFixture.page = allPages[allPages.length - 1];
  await pageFixture.page.bringToFront();
  await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });
});
