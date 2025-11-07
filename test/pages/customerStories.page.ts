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
}
export default CustomerStoriesPage