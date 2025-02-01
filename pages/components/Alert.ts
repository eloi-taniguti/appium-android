class Alert {
    /**
     * define elements
     */
    get title () { return $('*//android.widget.TextView[@resource-id="android:id/alertTitle"]') }
    get message () { return $('*//android.widget.TextView[@resource-id="android:id/message"]') }
    get okButton () { return $('*//android.widget.Button[@text="OK"]') }

}

export default new Alert()