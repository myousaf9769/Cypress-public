import data from '../fixtures/testlogin.json'
describe ('Automation Testing Execution', ()=>{

  
    before(() => {
    //
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')   
});
it('home page flow',()=>{

    cy.get('#input-email').type(data.credentials.email)
    cy.get('#input-password').type(data.credentials.password)



cy.get('#content > div > div:nth-child(2) > div > form > input').click()




});

});