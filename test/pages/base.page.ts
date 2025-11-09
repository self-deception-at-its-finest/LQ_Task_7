class Base {

    async open(path = '') {
        await browser.url('/' + path)
    }
}
export default Base