const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const Deck  = require('./Card')
const {db} = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Card.create({ name: 'dhanyal', xp: 100 })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  it('has the correct name', async () => {
    expect(deck.name).toBe('dhanyal'); 
  });

  it('has the correct xp', async () => {
    expect(deck.xp).toBe(100)
  })
  
})
