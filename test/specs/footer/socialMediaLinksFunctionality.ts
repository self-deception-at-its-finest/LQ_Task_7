import footerComponent from "../../pages/footer.component.ts"
import homePage from "../../pages/home.page.ts";


describe('Footer', () => {
    it('Verify social media links in footer', async () => {
        await homePage.open()

        await footerComponent.verifyTwitter()
        await footerComponent.verifyFacebook()
        await footerComponent.verifyLinkedin()
    })
})