'use strict';

/**
 * covid-aware service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::covid-aware.covid-aware');
