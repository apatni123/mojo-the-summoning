// associations.test.js
const { db } = require('../db/config'); 
const { User, Deck, Card, Attack } = require('./index.js'); 

beforeAll(async () => {
    await db.sync({ force: true }); // Reset the database before tests
});

afterAll(async () => {
    await db.close(); // Close the database connection after tests
});

describe('Model Associations', () => {
    test('User should have one Deck', async () => {
        const user = await User.create({ username: 'dhanyal' });
        const deck = await Deck.create({ name: "dhanyal's deck", xp: 90 });

        await user.setDeck(deck); 
        const foundDeck = await user.getDeck(); 

        expect(foundDeck).toBeTruthy(); // Check if the deck exists
        expect(foundDeck.id).toBe(deck.id); // Verify correct association
    });

    test('Deck should have many Cards', async () => {
        const deck = await Deck.create({ name: 'testdeck', xp: 100 });
        const card1 = await Card.create({ name: 'Card 1' });
        const card2 = await Card.create({ name: 'Card 2' });

        await deck.addCard(card1); 
        await deck.addCard(card2);

        const foundCards = await deck.getCards(); 

        expect(foundCards.length).toBe(2); // Check both cards are associated
        expect(foundCards[0].id).toBe(card1.id); // Check first card 
        expect(foundCards[1].id).toBe(card2.id); // Check second card 
    });

    test('Card should belong to many Attacks', async () => {
        const card = await Card.create({ name: 'testCard' });
        const attack1 = await Attack.create({ name: 'Attack 1' });
        const attack2 = await Attack.create({ name: 'Attack 2' });

        await card.addAttack(attack1); 
        await card.addAttack(attack2);

        const foundAttacks = await card.getAttacks(); 

        expect(foundAttacks.length).toBe(2); // Check both attacks are associated
        expect(foundAttacks[0].id).toBe(attack1.id); // Check first attack 
        expect(foundAttacks[1].id).toBe(attack2.id); // Check second attack 
    });

    test('Attack should belong to many Cards', async () => {
        const card1 = await Card.create({ name: 'Card 1' });
        const card2 = await Card.create({ name: 'Card 2' });
        const attack = await Attack.create({ name: 'Test Attack' });

        await card1.addAttack(attack);  
        await card2.addAttack(attack);

        const foundCards = await attack.getCards(); 

        expect(foundCards.length).toBe(2); // Check both cards are associated
        expect(foundCards[0].id).toBe(card1.id); // Check first card 
        expect(foundCards[1].id).toBe(card2.id); // Check second card 
    });
});
