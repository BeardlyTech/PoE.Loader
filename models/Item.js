const Model = require('./Model');
const _ = require('lodash');
const Cargo = require('../lib/cargo');

class Item extends Model {
    static get tableName() {
        return 'tblItems';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                base_item: { type: 'string'},
                class: { type: 'string'},
                description: { type: 'string'},
                drop_areas: { type: 'string'},
                drop_areas_html: { type: 'string'},
                drop_enabled: { type: 'string'},
                drop_leagues: { type: 'string'},
                drop_level: { type: 'string'},
                drop_level_maximum: { type: 'string'},
                explicit_mods: { type: 'string'},
                explicit_stat_text: { type: 'string'},
                flavour_text: { type: 'string'},
                frame_type: { type: 'string'},
                help_text: { type: 'string'},
                html: { type: 'string'},
                icon: { type: 'string'},
                implicit_mods: { type: 'string'},
                implicit_stat_text: { type: 'string'},
                inventory_icon: { type: 'string'},
                is_corrupted: { type: 'string'},
                is_relic: { type: 'string'},
                metadata_id: { type: 'string'},
                mods: { type: 'string'},
                name: { type: 'string'},
                name_list: { type: 'string'},
                quality: { type: 'string'},
                rarity: { type: 'string'},
                stat_text: { type: 'string'},
                tags: { type: 'string'},
            }
        }
    }

    static async saveCollection(items) {
        try {
            return await Item.query().insert(items);
        } catch(e) {
            console.log('e', e);
            return new Error('Unable to save collection');
        }
    }

    static mapFields(record) {
        const wikiItem = record.title;
        _.each(wikiItem, function(value, key) {
            const newKey = key.replace(/\s+/g, '_');

            if (newKey !== key) {
                wikiItem[newKey] = wikiItem[key];
                delete wikiItem[key];
            }
        })

        return wikiItem;
    }

    static async fetchItemsFromWiki(itemClass) {
        await Item.query().delete().where('class', itemClass);
        const fields = Object.keys(Item.jsonSchema.properties).join(',');
        const cargo = new Cargo({
            tables: 'items',
            where: `class="${itemClass}"`,
            fields,
            limit: 1000,
        });

        const data = await cargo.query();
        const items = data.map(item => Item.mapFields(item));

        console.log('Number of items in class retrieved: ', itemClass, items.length);

        await Item.saveCollection(items);
        console.log('Finished saving', itemClass);
    }

    static async findByTag(tag) {

    }
}

module.exports = Item;