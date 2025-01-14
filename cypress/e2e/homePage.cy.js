
import { homePage } from "../Pages/homePage"
import homeData from '../fixtures/homeData.json'
const homeObj = new homePage()
describe ('Automation Testing Execution', ()=>{


//import registerData from '../../cypress/fixtures/registerData.json'

before(() => {

cy.login(homeData.login.username,homeData.login.password)
})
it('home page flow',()=>{


homeObj.searchProduct(homeData.Product.ProductName)
homeObj.addToCart()
homeObj.verifySuccessMessage().should('contain',homeData.message.successMessage)

})


})