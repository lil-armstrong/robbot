/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
const path = require('path');
function setAPIURI(method, pathname, version=1) {
  const API_URI = `/api/v${version}/`;
  return `${method} ${path.join(API_URI, pathname)}`;
}

module.exports.routes = {
  'GET /api/v1/screenshot': { controller: 'PilferController', action: 'screenshot', cors: false },
};
