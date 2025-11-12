import headerComponent from "../../pages/header.component.ts"
import pricingPage from "../../pages/pricing.page.ts"


describe('Main Navigation Menu', () => {
    it('Verify logo functionality in the main navigation menu', async () => {
        await pricingPage.open()
        await headerComponent.headerLogo.click()
        await expect(browser).toHaveUrl(process.env.BASE_URL + '/')
    })
})