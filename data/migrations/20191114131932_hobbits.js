
exports.up = function(knex) {
  return knex.schema.createTable('hobbits', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('hobbits');
};
