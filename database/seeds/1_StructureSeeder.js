'use strict'

/*
|--------------------------------------------------------------------------
| StructureSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Structure = use('App/Models/Structure')

class StructureSeeder {
  async run () {
    let comminges = new Structure();
    comminges.name = "Comminges";
    await comminges.save();

    let leclerc = new Structure();
    leclerc.name = "Collège Leclerc";
    leclerc.save();
  }
}

module.exports = StructureSeeder
