import { registerPage } from "../Pages/registerPage"
import registerData from '../fixtures/registerData.json'
const registerObj = new registerPage()
describe ('Automation Testing Execution', ()=>{


//import registerData from '../../cypress/fixtures/registerData.json'
it('register flow',()=>{

registerObj.openURL(URL)
registerObj.enterFirstName(registerData.firstName)
registerObj.enterLasttName(registerData.lastName)
registerObj.enterEmail(registerData.email)
registerObj.enterTelehone(registerData.telephone)
registerObj.enterPassword(registerData.password)
registerObj.selectCheckbox()
registerObj.clickOnContinue()

})


})