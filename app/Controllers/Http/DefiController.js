'use strict'

const Defi = use('App/Models/Defi');

class DefiController {
    async list({ view }) {
        let defis = await Defi.query().withCount('users').fetch();
        return view.render('defi_list', { defis: defis.toJSON() })
    }
}

module.exports = DefiController
