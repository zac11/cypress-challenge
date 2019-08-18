// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("clickRandomCategory",()=>{
    cy.get('#block_top_menu').find('ul').first().children().its('length').then(($length)=>{
        const randomnumber = Cypress._.random(0,$length);
        cy.get('#block_top_menu').find('ul').first().children().eq(randomnumber).click();
        cy.url().should('include','controller=category');
    });
});


Cypress.Commands.add("clickRandomProduct",()=>{
    cy.get('#homefeatured').children().its('length').then(($length)=>{
        const randomnumber = Cypress._.random(0,$length-1);
        cy.get('#homefeatured').children().eq(randomnumber).click();
        cy.url().should('include','controller=product');
    });
});

Cypress.Commands.add('searchProduct',(productName)=>{
    cy.get('#search_query_top').type(productName);
    cy.get('#searchbox > .btn').click();
    cy.url().should('include','submit_search=');
});

//import for cypress file upload
import 'cypress-file-upload';