describe ('Automation Testing Execution', ()=>{


    //import registerData from '../../cypress/fixtures/registerData.json'
    let data
    before(() => {
    //
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')   
    cy.fixture('testlogin').then((value)=>{
        data = value 
})
});
    it('home page flow',()=>{
       
            cy.get('#input-email').type(data.credentials.email)
            cy.get('#input-password').type(data.credentials.password)
    
       
        
        cy.get('#content > div > div:nth-child(2) > div > form > input').click()
    
   
    
    
    });
  
});

