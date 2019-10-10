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
const Theme = use('App/Models/Theme')

class ThemeSeeder {
  async run () {
    let transport = new Theme();
    transport.title = "Transport";
    await transport.save();

    let alim = new Theme();
    alim.title = "Alimentation";
    await alim.save();

    let eau = new Theme();
    eau.title = "Eau/Energie";
    await eau.save();

    let elec = new Theme();
    elec.title = "Appareils électroniques";
    await elec.save();

    let achat = new Theme();
    achat.title = "Nouveaux achats";
    await achat.save();
    // await Factory.model('App/Models/Theme').createMany(5);
  }
}

module.exports = ThemeSeeder
