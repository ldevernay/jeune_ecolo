'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
    const user = await Factory.model('App/Models/User').create();
    const defi1 = await Factory.model('App/Models/Defi').make();
    const defi2 = await Factory.model('App/Models/Defi').make();
    const defi3 = await Factory.model('App/Models/Defi').make();
    const defi4 = await Factory.model('App/Models/Defi').make();
    const defi5 = await Factory.model('App/Models/Defi').make();
    user.defis().save(defi1);
    user.defis().save(defi2);
    user.defis().save(defi3);
    user.defis().save(defi4);
    user.defis().save(defi5);
  }
}

module.exports = DatabaseSeeder
