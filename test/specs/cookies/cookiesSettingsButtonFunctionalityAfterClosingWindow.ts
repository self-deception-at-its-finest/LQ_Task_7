import homePage from "../../pages/home.page.ts"
import cookiesComponent from "../../pages/сookies.component.ts"


describe('Cookies', () => {
    it('Verify cookies settings window pop-up on "Cookies Settings" round button click', async () => {
        await homePage.open()

        await cookiesComponent.cookiesAllowWindowIsDisplayed()

        await cookiesComponent.cookiesAllowWindowCloseButton.waitForClickable({ timeout: 10000 })
        await cookiesComponent.cookiesAllowWindowCloseButton.click()

        await cookiesComponent.cookiesSettingsRoundButton.waitForClickable({ timeout: 10000 })
        await cookiesComponent.cookiesSettingsRoundButton.click()

        await expect(cookiesComponent.cookiesSettingsWindow).toBeDisplayed({
            wait: 10000,
            interval: 1000
        })
    })
})