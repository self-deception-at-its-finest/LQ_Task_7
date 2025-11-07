class FooterComponent {
    // Social links loactors
    get linkedinIcon () {return $('a[href*="linkedin.com"]')}
    get twitterIcon () {return $('a[href*="https://x.com"]')}
    get facebookIcon () {return $('a[href*="facebook.com"]')}
    get logoIcon () {return $('footer a[href="/"] svg')}


    async verifyLinkedin() {
        await expect(this.linkedinIcon).toBeDisplayed()
        await expect(this.linkedinIcon).toHaveAttr('href', 'https://www.linkedin.com/company/telnyx')
    }

    async verifyTwitter() {
        await expect (this.twitterIcon).toBeDisplayed()
        await expect (this.twitterIcon).toHaveAttr('href', 'https://x.com/telnyx')
    }

    async verifyFacebook() {
        await expect(this.facebookIcon).toBeDisplayed()
        await expect(this.facebookIcon).toHaveAttr('href', 'https://www.facebook.com/Telnyx/')
    }
}

export default FooterComponent