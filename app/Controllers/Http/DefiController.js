'use strict'

const Defi = use('App/Models/Defi');

class DefiController {
    async list({ view }) {
        let defis = await Defi.query().withCount('users').fetch();
        return view.render('defi_list', { defis: defis.toJSON() })
    }
    async show({ params, view }) {
        let defi = await Defi.find(params.id);
        return view.render('defi_show', { defi })
    }
}

module.exports = DefiController
