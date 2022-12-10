'use strict';

/**
 * see-and-do service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::see-and-do.see-and-do');
