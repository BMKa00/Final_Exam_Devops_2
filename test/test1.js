const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {

    // Set Chrome options
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.setChromeBinaryPath('/usr/bin/google-chrome');

    // Create a Driver
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try {
        // Send driver to website
        await driver.get("http://44.197.176.212");

        // Find the body element and get its background color
        let bodyElement = await driver.findElement(By.tagName('body'));
        let backgroundColor = await bodyElement.getCssValue('background-color');

        // Expected color
        let expectedColor = 'rgb(0, 128, 0)'; // Expected color: green

        // Check the result
        if (backgroundColor !== expectedColor) {
            throw new Error(`Background color mismatch. Expected: ${expectedColor}, Actual: ${backgroundColor}`);
        } else {
            console.log('Background color is as expected.');
        }
    } catch (error) {
        console.log('Test Failed because:', error);
    } finally {
        await driver.quit();
    }

}

test_case();

