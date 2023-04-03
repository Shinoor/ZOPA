import { Given,When,Then, And } from "cypress-cucumber-preprocessor/step";

Given('user landing on direct debit page', ()=>{
    // write code here
    cy.visit(Cypress.env('url')+"/angularpractice/")
    cy.get('.intercom-borderless-frame').click({force: true})
    
})
//  When user enter valid bank account
When('  When user enter valid bank account',()=>{
    // write code here
})

// And enter routing number
And(' And enter routing number',()=>{

    //write code here
})

// Then information is encryted and secured

Then('Then information is encryted and secured', ()=>{

    // write code here
})