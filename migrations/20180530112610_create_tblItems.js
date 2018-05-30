exports.up = async function (knex, Promise) {
    await knex.schema.createTable('tblItems', function (table) {
        table.increments();
        table.text('base_item');
        table.text('base_item_page');
        table.text('class');
        table.text('description');
        table.text('drop_areas');
        table.text('drop_areas_html');
        table.text('drop_enabled');
        table.text('drop_leagues');
        table.text('drop_level');
        table.text('drop_level_maximum');
        table.text('explicit_mods');
        table.text('explicit_stat_text');
        table.text('flavour_text');
        table.text('frame_type');
        table.text('help_text')
        table.text('html')
        table.text('icon')
        table.text('implicit_mods')
        table.text('implicit_stat_text')
        table.text('inventory_icon')
        table.text('is_corrupted')
        table.text('is_relic')
        table.text('metadata_id')
        table.text('mods')
        table.text('name')
        table.text('name_list')
        table.text('quality')
        table.text('rarity')
        table.text('stat_text')
        table.text('tags')
        table.timestamps(true, true);
    })
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTable('tblItems');
};
