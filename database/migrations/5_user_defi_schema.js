'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserDefiSchema extends Schema {
  up() {
    this.create('user_defis', (table) => {
      // table.primary(['id', 'defi_id', 'user_id'])
      // table.integer('id').notNullable().unsigned()
      // table.integer('defi_id').notNullable().unsigned()
      // table.integer('user_id').notNullable().unsigned()
      table.increments()
      table.integer('user_id').unsigned()
        .references('id').inTable('users')
      table.integer('defi_id').unsigned()
        .references('id').inTable('defis')
      table.timestamp('end_date')
      table.timestamps()
    })
  }

  down() {
    this.drop('user_defis')
  }
}

module.exports = UserDefiSchema
