import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import 'chromedriver';

describe('Famous Violinists UI Tests', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
    await driver.get('http://localhost:3000');
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('should display the title', async () => {
    const title = await driver.findElement(By.tagName('h1')).getText();
    expect(title).toBe('Famous Violinists');
  });
});
