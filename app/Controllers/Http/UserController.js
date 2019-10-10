'use strict'

const { validateAll } = use('Validator');
const User = use('App/Models/User');

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
    async login({ auth, request }) {
        const { email, password } = request.all();
        await auth.attempt(email, password);

        return 'Logged in successfully';
    }

    show({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
            return "You cannot see someone else's profile"
        }
        return auth.user;
    }
}

module.exports = UserController
