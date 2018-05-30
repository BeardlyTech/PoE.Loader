const Item = require('../../models/Item');
const _ = require('lodash');
const Cargo = require('../../lib/cargo');

module.exports = async () => {

    const fields = Object.keys(Item.jsonSchema.properties).join(',');
    const cargo = new Cargo({
        tables: 'items',
        where: 'class="Belts"',
        limit: 1000,
        fields,
    })

    const data = await cargo.query();
    const items = data.map(item => Item.mapFields(item));
    await Item.saveCollection(items);
    console.log('Finished saving belts');
}