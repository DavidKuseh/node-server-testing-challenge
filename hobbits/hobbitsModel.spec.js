const Hobbits = require('./hobbitsModel');
const db = require('../data/dbConfig');

beforeEach(async () => {
    await db('hobbits').truncate()
})

describe('Hobbits model', () => {
    describe('insert function', () => {
        it('should insert a hobbit', async () => {
            await Hobbits.insert({ name: 'sam' })
            await Hobbits.insert({ name: 'pippin' })

            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(2)
        })
    })

    describe('remove function', () => {
        it('should delete a hobbit', async () => {

            await Hobbits.insert({ name: 'sam' })
            await Hobbits.insert({ name: 'pippin' })

            let hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);

            await Hobbits.remove(1);
            hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(1)
            
        })
    })
})