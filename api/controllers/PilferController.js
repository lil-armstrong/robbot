/**
 * PilferController
 *
 * @description :: Server-side actions for handling incoming requests to pilfer information.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const puppeteer = require('puppeteer');
const { URL } = require('url');

module.exports = {
  /**
     * Takes screenshot of a web page using a headless browser
     * @param {object} req
     * @param {object} res
     * @returns
     */
  screenshot: async (req, res) => {
    // get the url from the query
    const url = new URL(req.query.url);
    if (!(url.protocol && url.hostname)) {
      throw new Error('Invalid or empty http protocol or hostname');
    } else {
      let screenshot;
      try {
        return await (async () => {
          // launch puppeteer without sandbox
          const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
          });
          const page = await browser.newPage();

          // wait for the following page events to load finish
          await Promise.all([
            page.goto(url.href, {
              timeout: 30000,
              waitUntil: [
                'load',
                'domcontentloaded',
                'networkidle0',
                'networkidle2',
              ],
            }),
          ]);
          // Take the screenshot
          screenshot = await page.screenshot({
            encoding: 'base64',
          });


          browser.close();
          return res.json(screenshot);
        })();
      } catch (error) {
        console.error(error);
      }
    }
  }
};


