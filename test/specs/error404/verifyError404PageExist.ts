import { faker } from '@faker-js/faker';
import error404Page from "../../pages/error404.page.ts"
import errorMessages from "../../constants/errors.constants.json"

describe('Error 404 Page ', () => {
    it('Verify 404 Error Page Handling for Non-Existent endpoints', async () => {
        const fakePage = '/' + faker.lorem.word() + '/' + faker.lorem.word()

        await browser.url(fakePage)

        await expect(error404Page.errorMessage).toBeDisplayed()
        await expect(error404Page.errorMessage).toHaveText(errorMessages.error404Message)

        await expect(error404Page.errorSubMessage).toBeDisplayed()
        await expect(error404Page.errorSubMessage).toHaveText(errorMessages.error404SubMessage)

        await expect(error404Page.backToHomeButton).toBeDisplayed()
    })
})