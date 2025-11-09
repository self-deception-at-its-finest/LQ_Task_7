import { faker } from '@faker-js/faker';
import error404Page from "../../pages/error404.page.ts"

describe('Error 404 Page ', () => {
    it('Verify 404 Error Page Handling for Non-Existent endpoints', async () => {
        const fakePage = '/' + faker.lorem.word() + '/' + faker.lorem.word()

        await browser.url(fakePage)

        await expect(error404Page.backToHomeButton).toBeDisplayed()
        await error404Page.backToHomeButton.click()

        await expect(browser).toHaveUrl(process.env.BASE_URL + '/')
    })
})