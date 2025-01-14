
export class homePage{
webLocators={
search:'#search > input',
searchBtn: '#search > span > button',
addToCart: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(1)',
successMessage: '#product-search > div.alert.alert-success.alert-dismissible'
}
searchProduct(ProductName){
cy.get(this.webLocators.search).type(ProductName)
cy.get(this.webLocators.searchBtn).click()
}
addToCart(){
cy.get(this.webLocators.addToCart).click()

}
verifySuccessMessage(){
   return cy.get(this.webLocators.successMessage)
}
}