import contactUsPage from "../../pages/contactUs.page"
import {faker} from "@faker-js/faker"

describe('Contact Us Form', () => {
    it('Verify Contact Form Fields Are Cleared After Page Refresh', async () => {

        await contactUsPage.open()

        await contactUsPage.selectDropdown.selectByVisibleText("Support")
        await contactUsPage.firstnameInput.setValue(faker.person.firstName())
        await contactUsPage.lastnameInput.setValue(faker.person.lastName())
        await contactUsPage.emailInput.setValue(faker.internet.email())
        await contactUsPage.websiteInput.setValue(faker.internet.domainName())
        await contactUsPage.additionalInfoInput.setValue(faker.lorem.paragraph(5))
        await contactUsPage.hearAboutInput.setValue(faker.lorem.paragraph(5))

        await browser.refresh()

        await expect(contactUsPage.selectDropdown).toHaveValue("")
        await expect(contactUsPage.firstnameInput).toHaveValue("")
        await expect(contactUsPage.lastnameInput).toHaveValue("")
        await expect(contactUsPage.emailInput).toHaveValue("")
        await expect(contactUsPage.websiteInput).toHaveValue("")
        await expect(contactUsPage.hearAboutInput).toHaveValue("")
    })
})