import contactUsPage from "../../pages/contactUs.page"
import endpoints from '../../constants/endpoints.constants.json'


describe('Contact Us Form', () => {
    it('Required fields validation in the “Contact Us” form',  async () => {

        await contactUsPage.open()

        await contactUsPage.selectDropdown.selectByVisibleText("Select")
        await contactUsPage.firstnameInput.clearValue()
        await contactUsPage.lastnameInput.clearValue()
        await contactUsPage.emailInput.clearValue()
        await contactUsPage.selectCountry.selectByVisibleText("Select")
        await contactUsPage.phoneInput.clearValue()
        await contactUsPage.websiteInput.clearValue()
        await contactUsPage.hearAboutInput.clearValue()

        await contactUsPage.submitButtonClick()

        await expect(browser).toHaveUrl(expect.stringContaining('/' + endpoints.contactUs))

        const color = await contactUsPage.selectDropdown.getCSSProperty('border-color')
        await expect(color.value).toContain('235,0,0')
        await expect(contactUsPage.invalidDropdownSelectMessage).toBeDisplayed()
    })
})