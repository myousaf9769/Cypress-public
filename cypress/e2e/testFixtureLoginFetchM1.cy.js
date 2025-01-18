describe ('Automation Testing Execution', ()=>{


    //import registerData from '../../cypress/fixtures/registerData.json'
    
    before(() => {
    //
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')    
})
    it('home page flow',()=>{
        cy.fixture('testlogin').then((value)=>{
            cy.get('#input-email').type(value.credentials.email)
            cy.get('#input-password').type(value.credentials.password)
        })
       
        
        cy.get('#content > div > div:nth-child(2) > div > form > input').click()
    
    })
    
    
    })


