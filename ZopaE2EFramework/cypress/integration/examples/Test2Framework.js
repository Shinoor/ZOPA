/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage"

describe('My second Test Suite', function(){
    // run once before all test in the block

    cy.fixture('example').then(function(data){
        this.data=data
    })
})

it('My FirstTest case', function(){
    const homePage = new HomePage()
    cy.visit('https://www.zopa.com/')
    cy.get('').type(this.data.name)

})