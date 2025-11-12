import solutionsPage from "../../pages/solutions.page.ts"


describe('Use Cases', () => {
    it('Verify that Search filter for user cases at solutions page works properly', async () => {
        await solutionsPage.open()

        await solutionsPage.filterSearch.scrollIntoView()
        await solutionsPage.checkSearchResults("SMS")
        await solutionsPage.checkSearchResults("API")
    })
})