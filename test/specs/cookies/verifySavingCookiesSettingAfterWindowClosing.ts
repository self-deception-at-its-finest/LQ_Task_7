import homePage from "../../pages/home.page.ts"
import cookiesComponent from "../../pages/сookies.component.ts"
import textConstants from "../../constants/text.constants.json"


describe('Cookies', () => {
    it('Verify saving cookies settings after closing cookies window', async () => {
        await homePage.open()
        await browser.pause(3000)

        await cookiesComponent.cookiesAllowWindowIsDisplayed()
        await cookiesComponent.cookiesSettingsButton.waitForClickable({ timeout: 10000 })
        await cookiesComponent.cookiesSettingsButton.click()
        await expect(cookiesComponent.cookiesSettingsWindow).toBeDisplayed()

        await cookiesComponent.performanceCookiesSwitch.click()
        await cookiesComponent.functionalCookiesSwitch.click()
        await cookiesComponent.anotherCookiesSwitch.click()

        await cookiesComponent.cookiesSettingsSaveButton.click()

        await cookiesComponent.cookiesSettingsRoundButton.waitForClickable({ timeout: 10000 })
        await cookiesComponent.cookiesSettingsRoundButton.click()

        await expect(cookiesComponent.cookiesWindowDescription).toHaveText(textConstants.cookiesDesc)

        await expect(cookiesComponent.performanceCookiesCheckbox).toBeSelected()
        await expect(cookiesComponent.functionalCookiesCheckbox).toBeSelected()
        await expect(cookiesComponent.anotherCookiesCheckbox).toBeSelected()
    })
})