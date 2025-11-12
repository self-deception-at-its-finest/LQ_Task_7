import contactUsPage from "../../pages/contactUs.page"
import endpoints from '../../constants/endpoints.constants.json'
import {faker} from "@faker-js/faker";

describe('Contact Us Form', () => {
    it('Successful submitting of the “Contact Us” form with valid required fields',  async () => {

        await contactUsPage.open()

        await contactUsPage.selectDropdown.selectByVisibleText("Support")
        await contactUsPage.firstnameInput.setValue(faker.person.firstName())
        await contactUsPage.lastnameInput.setValue(faker.person.lastName())
        await contactUsPage.emailInput.setValue(faker.internet.email())
        await contactUsPage.selectCountry.selectByVisibleText("United States (+1)")
        await contactUsPage.phoneInput.setValue(faker.phone.number())
        await contactUsPage.websiteInput.setValue(faker.internet.domainName())
        await contactUsPage.additionalInfoInput.setValue(faker.lorem.paragraph(5))
        await contactUsPage.hearAboutInput.setValue(faker.lorem.paragraph(5))

        await contactUsPage.submitButtonClick()

        await expect(browser).toHaveUrl(expect.stringContaining('/' + endpoints.successfulSubmitting))
    })
})