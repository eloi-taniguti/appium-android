# Steps to run tests locally
1 - Start Android Studio

2 - Start Appium Server  
Need to set --allow-cors when using Appium Inspector from Web.  
Nedd to set a new port so the so it does not conflict with the tests port.

>appium --allow-cors -p 4724

3 - Start Appium Inspector
{
  "appium:automationName": "UiAutomator2",
  "appium:platformName": "Android",
  "appium:platformVersion": "15",
  "appium:deviceName": "Medium Phone API 35",
  "appium:app": "./appium/apk/android.wdio.native.app.v1.0.8.apk"
}

4 - Run tests
>npm run wdio