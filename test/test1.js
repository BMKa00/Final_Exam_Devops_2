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
        await driver.get("http://3.93.40.136");//IP from testing stage
        }

         // Find the body element and get its background color
          bodyElement = await driver.findElement(By.id('cell0'));

          //Expectations
          expectedfigure = 'x';

    if (bodyElement !== expectedfigure) {
            throw new Error(`figures mismatch,looks weird. Expected: ${expectedfigure}, Actual: ${bodyElement}`);
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

