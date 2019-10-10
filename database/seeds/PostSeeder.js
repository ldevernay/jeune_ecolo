'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Post = use('App/Models/Post')
const User = use('App/Models/User')

class PostSeeder {
  async run () {
    let post = new Post();
    post.title = "Hello World";
    post.content = "Premier article du blog";
    post.user().associate(await User.find(1));
    post.save();
  }
}

module.exports = PostSeeder
