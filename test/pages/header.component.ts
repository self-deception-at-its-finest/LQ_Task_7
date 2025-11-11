class HeaderComponent {
    get headerLogo () {return $('header a[href="/"]')}
    get burgerMenuButton() {return $('header>div>div>button')}
    get burgerMenu() {return $('#main-menu')}
    get burgerMenuSections(){return $$('button[class^="header-md:text-black"]')}
    // main navigation menu sections locators
    get productsButton () {return $('#radix-_R_4b9eivb_')}
    get solutionsButton () {return $('#radix-_R_4j9eivb_')}
    get whyTelnyxButton () {return $('#radix-_R_539eivb_')}
    get resourcesButton () {return $('#radix-_R_5b9eivb_')}
    get developersButton () {return $('#radix-_R_5j9eivb_')}

    //main navigation menu sections dropdowns locators
    get productsButtonDropdown () {return $('#radix-_R_4b9eivbH1_')}
    get solutionsButtonDropdown () {return $('#radix-_R_4j9eivbH1_')}
    get whyTelnyxButtonDropdown () {return $('#radix-_R_539eivbH1_')}
    get resourcesButtonDropdown () {return $('#radix-_R_5b9eivbH1_')}
    get developersButtonDropdown () {return $('#radix-_R_5j9eivbH1_')}

    async verifyDropdownMenuAppearsOnClick(button: ChainablePromiseElement, menu: ChainablePromiseElement){
        await button.click()
        await expect(menu).toBeDisplayed()
    }
}
export default new HeaderComponent