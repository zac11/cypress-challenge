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

// open test runner in a single device
describe('Start tests with iphone resolution',()=>{
    context('Header tests',()=>{
        beforeEach(()=>{
            cy.viewport('iphone-6');
        });

    it('displays header in mobile',()=>{
        cy.get('.sf-menu').should('not.be.visible');
        cy.get('.cat-title').click();
        cy.get('.sf-menu').should('be.visible');
    });

})

});

//open test runner in multiple devices one by one
describe('Open a page in different resolutions',()=>{

    //this makes cypress take screenshot only of the viewport
    Cypress.Screenshot.defaults({
        capture: 'viewport'
    });
    const devices=['iphone-6+','ipad-2',[1280,800]];
    devices.forEach((size)=>{
        it(`should open the website in the ${size} resolution`,()=>{
            if(Cypress._.isArray(size)){
                cy.viewport(size[0],size[1])
            }else{
                cy.viewport(size)
            }

            cy.visit('http://automationpractice.com/index.php');
            //screenshot will take full page screenshots if the size is not defined
            //from above defaults command in line 47,48
            cy.screenshot();
        })
    })
})