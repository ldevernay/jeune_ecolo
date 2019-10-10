'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ThemesSchema extends Schema {
  up () {
    this.create('themes', (table) => {
      table.increments()
      table.timestamps()
      table.string('title', 30).notNullable()
    })
  }

  down () {
    this.drop('themes')
  }
}

module.exports = ThemesSchema
