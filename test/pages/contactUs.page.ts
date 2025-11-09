import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"


class ContactUsPage extends BasePage {
    endpoint = endpoints.contactUs

    get selectDropdown () {return $('select[name="Reason_for_Contact__c"]')}
    get firstnameInput () {return $('input[name="FirstName"]')}
    get lastnameInput () {return $('input[name="LastName"]')}
    get emailInput () {return $('input[name="Email"]')}
    get selectCountry () {return $('#Phone_Number_Extension__c')}
    get phoneInput ()  {return $('input[name="Phone_Number_Base__c"]')}
    get websiteInput ()  {return $('input[name="Website"]')}
    get additionalInfoInput () {return $('textarea[name="Form_Additional_Information__c"]')}
    get hearAboutInput () {return $('input[name="How_did_you_hear_about_Telnyx_Open__c"]')}
    get submitButton () {return $('button[type="submit"]')}
    get invalidDropdownSelectMessage () {return $('#ValidMsgReason_for_Contact__c')}
    get invalidEmailMessage () {return $('#ValidMsgEmail')}
    get reportAbuseButton () {return $('#cQJK9vpUIklT8lgFEOmiT')}


    async submitButtonClick() {
        await this.submitButton.click()
    }

    async open() {
        await super.open(this.endpoint)
    }
}
export default new ContactUsPage()