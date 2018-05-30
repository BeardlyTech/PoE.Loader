const Model = require('./Model');

class ItemClass extends Model {
    static get tableName() {
        return 'tblItemClasses';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
            }
        }
    }

    static async saveCollection(itemClasses) {
        try {
            await ItemClass.query().delete();
            return await ItemClass.query().insert(itemClasses);
        } catch(e) {
            console.log('e', e);
            return new Error('Unable to save collection');
        }
    }
}

module.exports = ItemClass;