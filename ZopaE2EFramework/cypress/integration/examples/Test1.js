//cypress - Spec
/// <reference types="Cypress" />



describe('Test Suite', function(){

    it('Lunch the webPage', function(){

        //test  step
        cy.visit('https://www.zopa.com/')       
        cy.get('.intercom-borderless-frame').click({force: true})
        

    })
})