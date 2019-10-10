'use strict'

/*
|--------------------------------------------------------------------------
| ThemeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ThemeSeeder {
  async run () {
    await Factory.model('App/Models/Theme').createMany(5);
  }
}

module.exports = ThemeSeeder
