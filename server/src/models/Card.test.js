const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const Card  = require('./Card')
const {db} = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'ayesha', mojo: 100, stamina:50, imgURL:'www.google.com' })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  it('has the correct name', async () => {
    expect(card.name).toBe('ayesha'); 
  });

  it('has the correct mojo', async () => {
    expect(card.mojo).toBe(100)
  })

  it('has the correct stamina', async () => {
    expect(card.stamina).toBe(50)
  })

  it('has the correct imgURL', async () => {
    expect(card.imgURL).toBe("www.google.com")
  })
  
})
