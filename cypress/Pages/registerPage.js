
export class registerPage{

    weblocators ={
firstName:'#input-firstname',
lastName:'#input-lastname',
email:'#input-email',
telephone:'#input-telephone',
password:'#input-password',
passwordConfirm:'#input-confirm',
policyCheckbox:'#content > form > div > div > input[type=checkbox]:nth-child(2)',
continue:'#content > form > div > div > input.btn.btn-primary'
}
openURL(){
    cy.visit(Cypress.env('URL'))
    }

enterFirstName(Fname){
cy.get(this.weblocators.firstName).type(Fname)
}
enterLasttName(Lname){
    cy.get(this.weblocators.lastName).type(Lname)
    }
    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
        }
        enterTelehone(phoneNo){
            cy.get(this.weblocators.telephone).type(phoneNo)
            }
            enterPassword(password){
                cy.get(this.weblocators.password).type(password)
                cy.get(this.weblocators.passwordConfirm).type(password)
                }
                
                selectCheckbox(){

                    cy.get(this.weblocators.policyCheckbox).click()
                    }
                    clickOnContinue(){
                        cy.get(this.weblocators.continue).click()

                    }
}