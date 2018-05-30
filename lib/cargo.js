const axios = require('axios');
const _ = require('lodash');

class Cargo {
    constructor(config) {
        const {action, tables, limit, groupBy, fields, where} = config;
        this.url = 'https://pathofexile.gamepedia.com/api.php';
        this.action = action;
        this.tables = tables;
        this.limit = limit;
        this.groupBy = groupBy;
        this.format = 'json';
        this.fields = fields;
        this.where = where;
    }

    async query() {
        try {
            const {url} = this;
            const params = this.getParams();
            console.log('params', params);
            const results = await axios.get(url, {params});
            // console.log('results', results.data);
            return _.get(results, ['data', 'cargoquery'], []);
        } catch(e) {
            console.error('Error retrieving cargo query', e);
        }
    }

    getParams() {
        const {tables, limit, groupBy, fields, where} = this;

        const params = {
            action: 'cargoquery',
            format: 'json',
            tables,
            fields,
        };

        if (limit) {
            params.limit = limit;
        }

        if (groupBy) {
            params.group_by = groupBy;
        }

        if (where) {
            params.where = where;
        }

        return params;
    }
}

module.exports = Cargo;