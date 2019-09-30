'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const Database = use('Database');
const User = use('App/Models/User');

Route.get('/', async () => {
    return await Database.table('users').select('*'); 
});

Route.get('/test', async () => {
    const user = new User();

    user.username='toto';
    user.password='le-mdp-de-toto';
    user.email='toto@toto.com';
    return await user.save();
})

Route.post('login', 'UserController.login').middleware('guest');

Route.get('users/:id', 'UserController.show').middleware('auth');
