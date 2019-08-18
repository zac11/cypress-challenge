import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://google.com"
Given('I open Google page', ()=>{
    cy.visit(url);
})


const url2 = "https://facebook.com"
Given('I open Facebook home page', () => {
    cy.visit(url2);
})
