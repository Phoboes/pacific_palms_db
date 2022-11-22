'use strict';

/**
 * covid-aware router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::covid-aware.covid-aware');
