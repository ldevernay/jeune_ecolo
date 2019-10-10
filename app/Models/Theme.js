'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Theme extends Model {
    defis() {
        return this.hasMany('App/Models/Defi');
    }
}

module.exports = Theme
