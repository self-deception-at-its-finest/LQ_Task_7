import homePage from "../../pages/home.page.ts"
import cookiesComponent from "../../pages/сookies.component.ts"
import textConstants from "../../constants/text.constants.json"


describe('Cookies', () => {
    it('Verify cookies settings window pop-up on "Cookies Settings" round button click', async () => {
        await homePage.open()

        await cookiesComponent.cookiesAllowWindowIsDisplayed()

        await cookiesComponent.cookiesAllowWindowCloseButton.click()

        await cookiesComponent.cookiesSettingsRoundButton.click()

        await expect(cookiesComponent.cookiesSettingsWindow).toBeDisplayed()

        await expect(cookiesComponent.cookiesWindowDescription).toHaveText(textConstants.cookiesDesc)
    })
})