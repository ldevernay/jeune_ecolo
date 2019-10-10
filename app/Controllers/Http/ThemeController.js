'use strict'

const Theme = use('App/Models/Theme')

class ThemeController {
    async list({ view }) {
        let themes = await Theme.query().fetch();
        return view.render('themes.theme_list', { themes: themes.toJSON() })
    }
}

module.exports = ThemeController
