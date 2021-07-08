module.exports = {
  friendlyName: "Page screenshot",

  description: "Take a screenshot of the webpage url",

  inputs: {
    url: {
      description: "Web page url",
      type: "string",
      required: true,
    },
    // res: {
    //   type: "ref",
    //   description: "The current outgoing response (res).",
    //   required: true,
    // },
    // req: {
    //   type: "ref",
    //   description: "The current incoming request (req).",
    //   required: true,
    // },
  },

  fn: async function (inputs, exits) {
    var result = `URL, ${inputs.url}!`;
    return exits.success(result);
  },
  // fn: async function (inputs) {
  // const { url } = inputs;
  //   const { URL } = require("url");
  //   url = new URL(url);

  //   if (!(url.protocol && url.hostname)) {
  //     throw new Error("Invalid or empty http protocol or hostname");
  //   } else {
  //     const puppeteer = require("puppeteer");
  //     let screenshot;

  //     try {
  //       return await (async () => {
  //         const browser = await puppeteer.launch({
  //           args: ["--no-sandbox", "--disable-setuid-sandbox"],
  //         });
  //         const page = await browser.newPage();
  //         await Promise.all([
  //           page.goto(url.href, {
  //             timeout: 30000,
  //             waitUntil: [
  //               "load",
  //               "domcontentloaded",
  //               "networkidle0",
  //               "networkidle2",
  //             ],
  //           }),
  //         ]);
  //         screenshot = await takeScreenshot(page, {
  //           encoding: "base64",
  //         });
  //         browser.close();
  //         console.log({ res, req });
  //         return screenshot;
  //       })();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // },
};

async function takeScreenshot(page, options) {
  return await page.screenshot(options);
}
