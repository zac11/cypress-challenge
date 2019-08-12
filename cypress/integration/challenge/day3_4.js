describe('Add a product to cart and see if the hover appears',()=>{

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
    });

    it('adds a product',()=>{
        cy.get('.ajax_add_to_cart_button').first().click({force:true});
        cy.get('span.cross').click();
        cy.get('.cart_block').should('be.hidden').invoke('show');
        cy.get('a#button_order_cart').click();
        cy.url().should('include',"controller=order");
    });

    it('goes to category page and checks all checkboxes',()=>{
        cy.get('.sf-with-ul').first().click();
        cy.url().should('include','controller=category');
        cy.get('.checkbox').its('length').should('be.gte',1);

        //check all checkboxes
        //cy.get('.checkbox').click({multiple:true});
        cy.get('.checkbox').check().parent().should('have.class', 'checked');

        //click on checkboxes again to uncheck
        //cy.get('.checkbox').click({ multiple: true });
        cy.get('.checkbox').uncheck().parent().should('not.have.class', 'checked');

    })

})