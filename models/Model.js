const { Model } = require('objection');
const knex = require('../lib/knex');

Model.knex(knex);

module.exports = Model;