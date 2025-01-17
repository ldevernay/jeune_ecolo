'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/Structure', async (faker) => {
    return {
        name: faker.word({ length: 5 })
    }
})

Factory.blueprint('App/Models/Role', async (faker) => {
    return {
        name: faker.word({ length: 5 })
    }
})

Factory.blueprint('App/Models/User', async (faker) => {
    return {
        username: faker.username(),
        email: faker.email(),
        password: await Hash.make(faker.password())
    }
})

Factory.blueprint('App/Models/Defi', async (faker) => {
    return {
        title: faker.sentence({ words: 3 }),
        why: faker.paragraph({ sentences: 1 }),
        details: faker.paragraph({ sentences: 1 })
    }
})

Factory.blueprint('App/Models/Theme', async (faker) => {
    return {
        title: faker.word({ length: 5 })
    }
})


Factory.blueprint('App/Models/Post', async (faker) => {
    return {
        title: faker.sentence({ words: 3 }),
        content: faker.paragraph({ sentences: 1 })
    }
})
