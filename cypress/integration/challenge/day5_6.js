describe('Random element selection',()=>{

    const randomgenerate = (number) => {
        return Math.round(Math.random() * (number - 1));
    }
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
    });
    //function to get a random generator

    it('selects a random element',()=>{
        cy.get('.sf-with-ul').first().click();
        cy.url().should('include', 'controller=category');

        //get the length of the checkboxes
        cy.get('.checkbox').its('length').then((length)=>{
                const elementindex = randomgenerate(length);

                cy.get('.checkbox').eq(elementindex).check().parent().should('have.class','checked').then(($checkbox)=>{
                    cy.get($checkbox).find('.checkbox').uncheck().should('not.have.class','checked');
                })
        })
    })
})