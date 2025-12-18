import { BasePage } from './base/BasePage';

export class ContactUsPage extends BasePage {
  public async fillFirstName(firstName: string): Promise<void> {
    await this.page.getByPlaceholder('First Name').fill(firstName);
  }
  public async fillLastName(lastName: string): Promise<void> {
    await this.page.getByPlaceholder('Last Name').fill(lastName);
  }
  public async fillEmailAddress(email: string): Promise<void> {
    await this.page.getByPlaceholder('Email Address').fill(email);
  }
  public async fillComment(comment: string): Promise<void> {
    await this.page.getByPlaceholder('Comments').fill(comment);
  }
  public async clickOnSubmitButton(): Promise<void> {
    await this.page.waitForSelector('input[value="SUBMIT"]', { timeout: 10000 });
    await this.page.locator('input[value="SUBMIT"]').click();
  }
  public async getSuccessfulMessage(): Promise<string> {
    await this.page.waitForSelector('#contact_reply h1', { timeout: 15000 });
    return await this.page.innerText('#contact_reply h1');
  }
  public async getErrorMessage(): Promise<string> {
    await this.page.waitForSelector('body', { timeout: 10000 });
    const bodyElement = await this.page.locator('body');
    const bodyText = await bodyElement.textContent();
    return bodyText ?? '';
  }
  public async getHeaderText(message: string): Promise<string> {
    await this.page.waitForSelector('//h1 | //body', { state: 'visible' });
    const elements = await this.page.locator('//h1 | //body').elementHandles();
    let foundElementText = '';

    for (let element of elements) {
      let text = await element.innerText();

      if (text.includes(message)) {
        foundElementText = text;
        break;
      }
    }
    return foundElementText;
  }
}
