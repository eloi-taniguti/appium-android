import LoginPage from '../../pages/LoginPage'
import TabBar from '../../pages/components/TabBar'
import Alert from '../../pages/components/Alert'
import { getTextViewContent } from '../../utils/helpers'

describe('Login Tests', () => {

    beforeEach(async () => {
        await TabBar.openLogin();
        await expect($('//android.widget.TextView')).toHaveText('Login / Sign up Form')
    })

    it('should assert all text in the Login form', async () => {
        await expect(getTextViewContent(LoginPage.logInTab)).toHaveText('Login')
        await expect(LoginPage.inputEmail).toHaveAttr('displayed', 'true')
        await expect(LoginPage.inputPassword).toHaveAttr('displayed', 'true')
        await expect($$('//android.widget.TextView')[7]).toHaveText('When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.')
        await expect(getTextViewContent(LoginPage.logInButton)).toHaveText('LOGIN')
    })

    it('should assert all text in the Sign up form', async () => {
        await expect(getTextViewContent(LoginPage.signUpTab)).toHaveText('Sign up')
        await LoginPage.signUpTab.click()
        await expect(LoginPage.inputEmail).toHaveAttr('displayed', 'true')
        await expect(LoginPage.inputPassword).toHaveAttr('displayed', 'true')
        await expect(LoginPage.inputRepeatPassword).toHaveAttr('displayed', 'true')
        await expect(getTextViewContent(LoginPage.signUpButton)).toHaveText('SIGN UP')
    })

    it('should username and password be required', async () => {
        await expect($$('//android.widget.TextView')[4]).toHaveText('')
        await expect($$('//android.widget.TextView')[6]).toHaveText('')
        // click on Login button with username and password fields empty
        await LoginPage.logInButton.click()
        await expect($$('//android.widget.TextView')[4]).toHaveText('Please enter a valid email address')
        await expect($$('//android.widget.TextView')[6]).toHaveText('Please enter at least 8 characters')
        // fill in username only
        await LoginPage.inputEmail.setValue('test@webdriver.io')
        // click on Login button with password field empty
        await LoginPage.logInButton.click()
        await expect($$('//android.widget.TextView')[4]).toHaveText('')
        await expect($$('//android.widget.TextView')[6]).toHaveText('Please enter at least 8 characters')
    })


    it('should login with valid credentials', async () => {
        await LoginPage.inputEmail.setValue('test@webdriver.io')
        await LoginPage.inputPassword.setValue('Test1234!')
        await LoginPage.logInButton.click()

        await expect(Alert.title).toHaveText('Success')
        await expect(Alert.message).toHaveText('You are logged in!')
        // close Alert
        await Alert.okButton.click()
        await Alert.title.waitForExist({reverse: true})
    })

})