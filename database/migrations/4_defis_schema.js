'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DefisSchema extends Schema {
  up () {
    this.create('defis', (table) => {
      table.increments()
      table.string('title', 80).notNullable()
      table.string('summary', 250).notNullable()
      table.string('details', 500).notNullable()
      table.integer('theme_id', 11).unsigned().references('id').inTable('themes')
      table.timestamps()
    })
  }

  down () {
    this.drop('defis')
  }
}

module.exports = DefisSchema
