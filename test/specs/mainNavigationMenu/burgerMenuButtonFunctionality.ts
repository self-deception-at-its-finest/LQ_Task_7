import headerComponent from "../../pages/header.component.ts"
import homePage from "../../pages/home.page.ts"


describe('Main Navigation Menu', () => {
    it('Verify burger button functionality in the main navigation menu', async () => {
        await browser.setWindowSize(390, 844)
        await homePage.open()

        await expect(headerComponent.burgerMenuButton).toBeDisplayed({
            wait: 10000,
            interval: 1000
        })

        await headerComponent.burgerMenuButton.click()

        await expect(headerComponent.burgerMenu).toBeDisplayed({
            wait: 10000,
            interval: 1000
        })

        await expect(headerComponent.burgerMenuSections).toBeElementsArrayOfSize(6)
    })
})