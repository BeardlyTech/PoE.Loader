
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('tblCargoTables', function(table) {
    table.increments();
    table.text('cargo_table');
    table.text('cargo_table_title');
    table.timestamps(true, true);
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('tblCargoTables');
};
