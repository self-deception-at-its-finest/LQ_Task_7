import contactUsPage from "../../pages/contactUs.page"
import endpoints from '../../constants/endpoints.constants.json'
import {faker} from "@faker-js/faker";

describe('Contact Us Form', () => {
    it('Submitting of the “Contact Us” form with valid required fields except email',  async () => {
        await contactUsPage.open()

        const username = faker.internet.username()
        const invalidEmails = [
            `${username}@`,
            `${username}?example`,
            //`${username}@@example.com`
        ]

        await contactUsPage.selectDropdown.selectByVisibleText("Support")
        await contactUsPage.firstnameInput.setValue(faker.person.firstName())
        await contactUsPage.lastnameInput.setValue(faker.person.lastName())
        await contactUsPage.emailInput.setValue(faker.helpers.arrayElement(invalidEmails)) //pick random invalid email from array invalidEmails
        await contactUsPage.selectCountry.selectByVisibleText("United States (+1)")
        await contactUsPage.phoneInput.setValue(faker.phone.number())
        await contactUsPage.websiteInput.setValue(faker.internet.domainName())
        await contactUsPage.additionalInfoInput.setValue(faker.lorem.paragraph(5))
        await contactUsPage.hearAboutInput.setValue(faker.lorem.paragraph(5))

        await contactUsPage.submitButtonClick()

        await expect(browser).toHaveUrl(expect.stringContaining('/' + endpoints.contactUs))


        const color = await contactUsPage.emailInput.getCSSProperty('border-color')
        await expect(color.value).toContain('235,0,0')
        await expect(contactUsPage.invalidEmailMessage).toBeDisplayed()
    })
})