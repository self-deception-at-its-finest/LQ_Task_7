import headerComponent from "../../pages/header.component.ts"
import homePage from "../../pages/home.page.ts"


describe('Main Navigation Menu', () => {
    it('Verify burger button functionality in the main navigation menu', async () => {
        await browser.setWindowSize(375, 667)
        await homePage.open()

        await expect(headerComponent.burgerMenuButton).toBeDisplayed()
        await headerComponent.burgerMenuButton.click()

        await expect(headerComponent.burgerMenu).toBeDisplayed()
        await expect(headerComponent.burgerMenuSections).toBeElementsArrayOfSize(6)
    })
})