'use strict'

/*
|--------------------------------------------------------------------------
| DefiSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DefiSeeder {
  async run () {
    await Factory.model('App/Models/Defi').createMany(10);
  }
}

module.exports = DefiSeeder
