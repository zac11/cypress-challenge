describe('Tests the persistance of data',()=>{

    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php');
    })

    it('tests the the data in cart is persisting',()=>{
        const testcart = ()=>{
            cy.url().should('include','controller=product');
            cy.get('.ajax_cart_quantity').first().invoke('text').should('equal','1');
            
        }
        cy.clickRandomProduct();
        cy.get('#add_to_cart').click();
        cy.get('.continue').click().then((testcartstate)=>{
            cy.reload().then(testcart)
        })
    })
})