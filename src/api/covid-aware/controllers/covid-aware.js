'use strict';

/**
 * covid-aware controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::covid-aware.covid-aware');
