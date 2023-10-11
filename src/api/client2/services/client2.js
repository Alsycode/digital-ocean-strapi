'use strict';

/**
 * client2 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client2.client2');
