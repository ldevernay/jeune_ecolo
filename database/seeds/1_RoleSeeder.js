'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('App/Models/Role')

class RoleSeeder {
  async run () {
    let guest = new Role();
    guest.name = 'Invité';
    await guest.save();

    let citoyen = new Role();
    citoyen.name = 'Citoyen';
    await citoyen.save();

    let modo = new Role();
    modo.name = 'Modérateur';
    await modo.save();
  }
}

module.exports = RoleSeeder
