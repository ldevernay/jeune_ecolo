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
const Theme = use('App/Models/Theme')


Route
    .get('/', 'ThemeController.list');
Route
    .get('/theme/show/:id', 'DefiController.listTheme');
Route
    .get('/defi/show/:id', 'DefiController.show');

Route
    .get('/login', 'UserController.connexion');
Route
    .get('/logout', 'UserController.logout');
Route
    .post('/login', 'UserController.login')
    .middleware('guest');
Route
    .get('/users/:id', 'UserController.show')
    .middleware('auth');
Route
    .get('/signup', 'UserController.signup');
Route
    .post('/signup', 'UserController.create');
