//import endpoints from '../../constants/endpoints.constants.json'
import customerStoriesPage from "../../pages/customerStories.page.ts"


describe('Contact Us Form', () => {
    beforeEach(async () => {
        await customerStoriesPage.open()
    })

    it(' Verify \'Cosmo\' customer story page opens on click',  async () => {
        await customerStoriesPage.verifyCustomerStoryLink(customerStoriesPage.cosmoCustomerStoryLink, '/customer-stories/cosmo')
    })

    it(' Verify \'IvoryLab\' customer story page opens on click',  async () => {
        await customerStoriesPage.verifyCustomerStoryLink(customerStoriesPage.ivoryLabCustomerStoryLink, '/customer-stories/ivorylab')
    })

    it(' Verify \'Cyber Telecom\' customer story page opens on click',  async () => {
        await customerStoriesPage.verifyCustomerStoryLink(customerStoriesPage.cyberTelecomCustomerStoryLink, '/customer-stories/cyber-telecom')
    })
})