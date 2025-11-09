import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"


class PricingPage extends BasePage {
    endpoint = endpoints.pricing

    async open() {
        await super.open(this.endpoint)
    }
}
export default new PricingPage