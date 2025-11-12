class CookiesComponent {

    get cookiesAllowWindow () {return $('#onetrust-group-container')}
    get cookiesSettingsButton () {return $('#onetrust-pc-btn-handler')}



    get cookiesSettingsRoundButton () {return $('button[class="ot-floating-button__open"]')}

    get cookiesSettingsWindow() {return $('#onetrust-pc-sdk')}
    get cookiesWindowDescription() {return $('#ot-pc-desc')}
    get cookiesAllowWindowCloseButton() {return $('button[class^="onetrust-close-btn-handler"]')}
    get cookiesSettingsWindowCloseButton() {return $('#close-pc-btn-handler')}
    get performanceCookiesSwitch() {return $('label[for="ot-group-id-C0002"]')}
    get functionalCookiesSwitch() {return $('label[for="ot-group-id-C0003"]')}
    get anotherCookiesSwitch() {return $('label[for="ot-group-id-C0004"]')}

    get performanceCookiesCheckbox() {return $('#ot-group-id-C0002')}
    get functionalCookiesCheckbox() {return $('#ot-group-id-C0003')}
    get anotherCookiesCheckbox() {return $('#ot-group-id-C0004')}

    get cookiesSettingsSaveButton() {return $('button[class="save-preference-btn-handler onetrust-close-btn-handler"]')}

    async cookiesAllowWindowIsDisplayed () {
        await expect(this.cookiesAllowWindow).toBeDisplayed({
            wait: 10000,
            interval: 1000
        })
    }

}

export default new CookiesComponent()
