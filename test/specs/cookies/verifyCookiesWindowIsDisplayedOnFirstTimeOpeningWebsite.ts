import homePage from "../../pages/home.page.ts"
import cookiesComponent from "../../pages/сookies.component.ts"



describe('Cookies', () => {
    it('Verify  allow cookies window is displayed when first visiting website', async () => {
        await homePage.open()
        await expect(cookiesComponent.cookiesAllowWindow).toBeDisplayed()   
    })
})