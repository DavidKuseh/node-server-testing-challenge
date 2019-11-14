
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hobbits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hobbits').insert([
        { name: 'sam'},
        { name: 'frodo'},
        { name: 'pippin'},
      ]);
    });
};
