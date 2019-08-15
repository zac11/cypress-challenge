describe('Test file upload functionality with Cypress',()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php');
    });

    it('gets the file uploaded',()=>{
        cy.get('#contact-link').click();
        cy.url().should('include',"controller=contact");

        //fill the form
        cy.get('#id_contact').select('Webmaster');
        cy.get('#email').type('abcd@gmail.com');
        cy.get('#id_order').type('1234');
        cy.get('#message').type('hello world');
        
    })
})