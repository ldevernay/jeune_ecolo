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
const User = use('App/Models/User')
const Structure = use('App/Models/Structure')
const Role = use('App/Models/Role')

class DatabaseSeeder {
  async run() {
    const struct1 = await Structure.find(1);
    const struct2 = await Structure.find(2);

    const role1 = await Role.find(1);
    const role2 = await Role.find(2);

    const user1 = await User.find(1);
    const user2 = await User.find(2);

    user1.structure().associate(struct1);
    user1.role().associate(role1)

    user2.structure().associate(struct2);
    user2.role().associate(role2)

    const theme1 = await Theme.find(1);
    const theme2 = await Theme.find(2);
    
    const defi1 = await Factory.model('App/Models/Defi').create();
    const defi2 = await Factory.model('App/Models/Defi').create();
    const defi3 = await Factory.model('App/Models/Defi').create();
    const defi4 = await Factory.model('App/Models/Defi').create();
    const defi5 = await Factory.model('App/Models/Defi').create();

    theme1.defis().save(defi1);
    theme1.defis().save(defi3);
    theme1.defis().save(defi5);
    theme2.defis().save(defi2);
    theme2.defis().save(defi4);

    user1.defis().attach([defi1.id, defi2.id, defi3.id, defi4.id, defi5.id]);

    user2.defis().attach([defi1.id, defi3.id, defi5.id]);

    const post1 = await Factory.model('App/Models/Post').create();
    post1.user().associate(user1);
  }
}

module.exports = DatabaseSeeder
