'use strict'

const { validateAll } = use('Validator');
const User = use('App/Models/User');
const moment = require('moment');
moment.locale('fr');

class UserController {
    signup({ view }) {
        return view.render('user.signup');
    }

    async create({ request, session, response }) {
        const userInfo = request.only(['username', 'email', 'password', 'password_confirmation'])
        const rules = {
            name: 'required|max:255',
            email: 'required|email|max:255|unique:users',
            password: 'required|min:6|max:30',
            password_confirmation: 'required_if:password|min:6|max:30|same:password'
        }

        const validation = await validateAll(userInfo, rules)


        if (validation.fails()) {
            response.send(validation.messages());
        }

        let user = new User();
        user.username = userInfo.username;
        user.email = userInfo.email;
        user.password = userInfo.password;
        await user.save();

        response.redirect('/login')
    }

    connexion({ view }) {
        return view.render('user.connexion');
    }

    async login({ auth, request, response }) {
        const { email, password } = request.all();
        await auth.attempt(email, password);
        response.redirect('/');
    }

    async logout({ auth, response }) {
        await auth.logout();
        response.redirect('/login');
    }

    async stopDefi({ auth, response, params }) {
        let user = await auth.user;
        await user
            .defis()
            .pivotQuery()
            .where({ 'defi_id': params.id, 'user_id': user.id })
            .update({ end_date: moment().format("YYYY-MM-DD HH:mm:ss") })
        response.redirect('back');
    }

    async show({ view, auth, params }) {
        let user = await User.find(params.id);
        let structure = await user.structure().fetch();
        let defis = await user.defis().fetch();
        defis = defis.toJSON().map(defi => {
            if (!defi.pivot.end_date) {
                defi.from = "Commencé " + moment(defi.created_at).fromNow();
            } else {
                defi.from = "Défi terminé";
            }
            return defi;
        })
        return view.render('user.profile', { user, structure, defis });
    }
}

module.exports = UserController
