module.exports = {
  friendlyName: "Screenshot",
  description: "Screenshot something.",
  inputs: {
    url: {
      description: "Web page url",
      type: "string",
      required: true,
      example: "https://example.com",
    },

    options: {
      description: "screenshot options",
      type: "ref",
      required: false,
    },
  },

  exits: {},

  fn: async function ({ url, options }) {
    // All done.
    return sails.helpers.pageScreenshot(url, options = undefined)
  },
};
