class Error404Page  {
    get errorMessage (){return $('section>div>div>h1')}
    get errorSubMessage () {return $('section>div>div>p')}
    get backToHomeButton () {return $('[data-content="Back to home"]')}
}
export default Error404Page