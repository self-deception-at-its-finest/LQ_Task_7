import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"


class CustomerStoriesPage extends BasePage {
    endpoint = endpoints.customerStories

    get cosmoCustomerStoryLink () { return $('a[href*="customer-stories/cosmo"]')}
    get ivoryLabCustomerStoryLink (){return $('a[href*="customer-stories/ivorylab"]')}
    get cyberTelecomCustomerStoryLink (){return $('a[href*="customer-stories/cyber-telecom"]')}


    async open() {
        await super.open(this.endpoint)
    }
    async verifyCustomerStoryLink(customerStoryLink: ChainablePromiseElement, expectedUrlPart: string) {
        await customerStoryLink.scrollIntoView()
        await customerStoryLink.click()
        await expect(browser).toHaveUrl(expect.stringContaining(expectedUrlPart))
    }
}
export default new CustomerStoriesPage