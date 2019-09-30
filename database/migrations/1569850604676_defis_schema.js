'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DefisSchema extends Schema {
  up () {
    this.create('defis', (table) => {
      table.increments()
      table.string('title', 80).notNullable().unique()
      table.string('summary', 100).notNullable()
      table.string('details', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('defis')
  }
}

module.exports = DefisSchema
