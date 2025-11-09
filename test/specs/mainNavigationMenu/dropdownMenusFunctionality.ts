import homePage from "../../pages/home.page.ts"
import headerComponent from "../../pages/header.component.ts";


describe('Main Navigation Menu', () => {
    before(async () => {
        await homePage.open()
    })

    it('Verify dropdown menu appears when clicking on Products button', async () => {
        await headerComponent.verifyDropdownMenuAppearsOnClick(headerComponent.productsButton, headerComponent.productsButtonDropdown)
    })

    it('Verify dropdown menu appears when clicking on Solutions button', async () => {
        await headerComponent.verifyDropdownMenuAppearsOnClick(headerComponent.solutionsButton, headerComponent.solutionsButtonDropdown)
    })

    it('Verify dropdown menu appears when clicking on Why Telnyx button', async () => {
        await headerComponent.verifyDropdownMenuAppearsOnClick(headerComponent.whyTelnyxButton, headerComponent.whyTelnyxButtonDropdown)
    })

    it('Verify dropdown menu appears when clicking on Resources button', async () => {
        await headerComponent.verifyDropdownMenuAppearsOnClick(headerComponent.resourcesButton, headerComponent.resourcesButtonDropdown)
    })

    it('Verify dropdown menu appears when clicking on Developers button', async () => {
        await headerComponent.verifyDropdownMenuAppearsOnClick(headerComponent.developersButton, headerComponent.developersButtonDropdown)
    })
})