'use strict'

const Defi = use('App/Models/Defi');

class DefiController {
    async list({ view }) {
        let defis = await Defi.query().withCount('users').fetch();
        return view.render('defi_list', { defis: defis.toJSON() });
    }
    async listTheme({ params, view }) {
        let defis = await Defi.query().where({ theme_id: params.id }).fetch();
        return view.render('defi_list', { defis: defis.toJSON() });
    }
    async show({ auth, params, view }) {
        let defi = await Defi.find(params.id);
        let user = await auth.user;
        let defi_user = await user
            .defis()
            .pivotQuery()
            .where({ 'defi_id': defi.id, 'user_id': user.id })
            .fetch();
        let defi_pret = (defi_user.toJSON().length)?false:true;
        
        return view.render('defi_show', { defi, defi_pret });
    }
}

module.exports = DefiController
