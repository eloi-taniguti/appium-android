class LoginPage {
    /**
     * define elements
     */
    get inputEmail () { return $('~input-email') }
    get inputPassword () { return $('~input-password') }
    get inputRepeatPassword () { return $('~input-repeat-password') }
    get logInTab () { return $('~button-login-container')}
    get logInButton () { return $('~button-LOGIN')}
    get signUpTab () { return $('~button-sign-up-container')}
    get signUpButton () { return $('~button-SIGN UP')}

    /**
     * define or overwrite page methods
     */

}

export default new LoginPage()