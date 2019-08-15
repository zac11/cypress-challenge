describe("Searching for a product",()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php');
    })

    it('Searches for product - valid and invalid input',()=>{
        const input = [
            {
                product: 'dress',
                returned_info: 'Sort by'
            }, {
                product: 'xxxTT^&LL',
                returned_info: 'No results'
            }, {
                product: ' ',
                returned_info: 'No results'
            }
        ]

        input.forEach(input=>{
             const {product,returned_info} = input
             cy.get('#search_query_top').type(product);
             cy.get('#searchbox > .btn').click();
             cy.url().should('include','submit_search=');
             cy.contains(returned_info).should('be.visible');
             cy.get('.search_query').clear();
        })

        cy.get('#searchbox > .btn').click();
        cy.contains('Please enter a search keyword');
    });


    it('searches for auto complete to finish and selects a product',()=>{
        cy.get('#search_query_top').type('dress');
        cy.get('div.ac_results').find('li').contains('Dress').click();
        cy.url().should('include','controller=product');
    });

    it('goes to product page and checks for pre-selected options',()=>{
        cy.get('.replace-2x.img-responsive').first().click();
        cy.get('#group_1').find("[title=S]").should('have.attr',"selected");
        
    });
})