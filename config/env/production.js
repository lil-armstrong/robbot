/**
 * Production environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for production.  The configuration in this file
 * is only used in your production environment, i.e. when you lift your app using:
 *
 * ```
 * NODE_ENV=production node app
 * ```
 *
 * > If you're using git as a version control solution for your Sails app,
 * > this file WILL BE COMMITTED to your repository by default, unless you add
 * > it to your .gitignore file.  If your repository will be publicly viewable,
 * > don't add private/sensitive data (like API secrets / db passwords) to this file!
 *
 * For more best practices and tips, see:
 * https://sailsjs.com/docs/concepts/deployment
 */

module.exports = {
  environment: 'production',
  models: {
    migrate: 'safe',
  },
  blueprints: {
    shortcuts: false,
  },
  security: {
    cors: {
      allowOrigins: ['https://oebong.netlify.app', 'http://localhost:3000']
    },
    // csrf: true

  },
  session: {
    cookie: {
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,  // 24 hours
    },

  },
  sockets: {
    onlyAllowOrigins: [
      'https://oebong.netlfy.app',
    ],
  },

  log: {
    level: 'debug'
  },
  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000, // One year
    trustProxy: true,

  },
  custom: {
    // baseUrl: 'https://web-robbot.herokuapp.com',
    // internalEmailAddress: 'oebong1@gmail.com',

  },
};
