import contactUsPage from "../../pages/contactUs.page.ts"
import endpoints from "../../constants/endpoints.constants.json"

describe('Report Abuse', () => {
    it('Verify that report abuse button redirects to abuse report page', async () => {
        await contactUsPage.open()

        await contactUsPage.reportAbuseButton.scrollIntoView()
        await expect(contactUsPage.reportAbuseButton).toBeDisplayed()
        await expect(contactUsPage.reportAbuseButton).toHaveAttr('href', process.env.BASE_URL + '/' + endpoints.reportAbuse)
    })
})