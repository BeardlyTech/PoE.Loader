const Item = require('./models/Item');
const ItemClass = require('./models/ItemClass');
const Promise = require('bluebird');
const _ = Promise.promisifyAll(require('lodash'));

void async function() {
    const itemClasses = await ItemClass.query();

    await _.forEachAsync(itemClasses, async itemClass => {
        await Item.fetchItemsFromWiki(itemClass.name);
    });


    process.exit();
}();