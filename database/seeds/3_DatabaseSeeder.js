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
const Theme = use('App/Models/Theme')

class DatabaseSeeder {
  async run() {
    const user = await Factory.model('App/Models/User').create();
    const theme1 = await Theme.find(1);
    const theme2 = await Theme.find(2);
    // const theme1 = await Factory.model('App/Models/Theme').create();
    // const theme2 = await Factory.model('App/Models/Theme').create();
    const defi1 = await Factory.model('App/Models/Defi').make();
    const defi2 = await Factory.model('App/Models/Defi').make();
    const defi3 = await Factory.model('App/Models/Defi').make();
    const defi4 = await Factory.model('App/Models/Defi').make();
    const defi5 = await Factory.model('App/Models/Defi').make();
    theme1.defis().save(defi1);
    theme2.defis().save(defi2);
    theme1.defis().save(defi3);
    theme2.defis().save(defi4);
    theme1.defis().save(defi5);
    user.defis().attach([defi1.id, defi2.id, defi3.id, defi4.id, defi5.id]);
  }
}

module.exports = DatabaseSeeder
