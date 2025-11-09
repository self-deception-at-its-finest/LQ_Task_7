import footerComponent from "../../pages/footer.component.ts"
import pricingPage from "../../pages/pricing.page.ts"


describe('Footer', () => {
    it('Verify footer logo redirect', async () => {
        await pricingPage.open()

        await footerComponent.logoIcon.scrollIntoView()
        await footerComponent.logoIcon.waitForClickable()
        await footerComponent.logoIcon.click()

        await expect(browser).toHaveUrl(process.env.BASE_URL + '/')
    })
})