'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StructuresSchema extends Schema {
  up () {
    this.create('structures', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('structures')
  }
}

module.exports = StructuresSchema
