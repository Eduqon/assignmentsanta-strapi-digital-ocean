'use strict';

/**
 * seotag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seotag.seotag');
