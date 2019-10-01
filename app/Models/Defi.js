'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Defi extends Model {
    users(){
        return this.belongsToMany('App/Models/User')
        .pivotTable('user_defis')
        .withTimestamps();
    }
}

module.exports = Defi
