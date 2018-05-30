
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('tblItemClasses', function(table) {
      table.increments();
      table.text('name').unique();
      table.timestamps(true, true);
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('tblItemClasses');
};
