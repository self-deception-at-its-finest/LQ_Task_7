import homePage from "../../pages/home.page.ts"
import cookiesComponent from "../../pages/сookies.component.ts"


describe('Cookies', () => {
    it('Verify cookies window pop-up on "Cookies Settings" button click', async () => {
        await homePage.open()

        await cookiesComponent.cookiesAllowWindowIsDisplayed()

        await cookiesComponent.cookiesSettingsButton.click()

        await expect(cookiesComponent.cookiesSettingsWindow).toBeDisplayed({
            wait: 10000,
            interval: 1000
        })

    })
})