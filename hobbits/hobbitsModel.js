const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    remove
}

async function insert(hobbit) {
    await db('hobbits').insert(hobbit);
}

function remove(id) {
    return db('hobbits').where({id}).del();
}