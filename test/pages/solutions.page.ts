import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"


class SolutionsPage extends BasePage {
    endpoint = endpoints.solutions

    get filterSearch () {return $('#search')}
    get searchResults () {return $$('li>div>div>h3')}


    /**
     * Checks the search filter functionality
     * @param {string} message - Search query to enter into the filter
     * @returns {void}
     *
     * @example
     * // Check search for the word "SMS"
     * checkSearchFilter("SMS")
     *
     * @description
     * Function Verifies that each result contains the search text
     */
    async checkSearchResults(message: string): Promise<void>  {
        await this.filterSearch.setValue(message)
        await browser.keys('Enter')

        await browser.pause(5000)

        const results = await this.searchResults
        expect(results.length).toBeGreaterThan(0)

        for (const result of results) {
            const text = await result.getText()
            expect(text.toLowerCase()).toContain(message.toLowerCase())
        }
    }

    async open() {
        await super.open(this.endpoint)
    }
}
export default new SolutionsPage