'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserDefiSchema extends Schema {
  up() {
    this.create('user_defis', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
        .references('id').inTable('users')
      table.integer('defi_id').unsigned()
        .references('id').inTable('defis')
      table.datetime('end_date')
      table.timestamps()
    })
  }

  down() {
    this.drop('user_defis')
  }
}

module.exports = UserDefiSchema
