const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const Card  = require('./Attack')
const {db} = require('../db/config')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ title: 'punch', mojoCost: 5, staminaCost:12 })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

  it('has the correct title', async () => {
    expect(attack.title).toBe('punch'); 
  });

  it('has the correct mojocost', async () => {
    expect(attack.mojoCost).toBe(5)
  })

  it('has the correct staminacost', async () => {
    expect(attack.staminaCost).toBe(12)
  })


  
})
