const axios = require('axios');
const ItemClass = require('../models/ItemClass');
const _ = require('lodash');

module.exports = async () => {
    const apiUrl = 'https://pathofexile.gamepedia.com/api.php';
    const action = 'cargoquery';
    const tables = 'items';
    const limit = 1000;
    const group_by = 'class';
    const format = 'json';
    const fields = 'class'

    const results = await axios.get(apiUrl, {
        params: {
            action,
            tables,
            format,
            fields,
            group_by,
        }
    });

    const data = _.get(results, ['data', 'cargoquery']);
    const itemClasses = data.map(itemClass => ({name: itemClass.title.class}));

    await ItemClass.saveCollection(itemClasses);
    console.log('Finished saving item classes');
}