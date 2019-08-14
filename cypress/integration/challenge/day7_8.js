describe('Adding tests for categorizing tests in different devices',()=>{
    context('Mobile devices',()=>{
        const phonesize = ['iphone-6','iphone-6+','iphone-5'];

        phonesize.forEach((phone)=>{
            it(`tests the same platform on different phone devices as per ${phone}`,()=>{
                cy.viewport(phone);
                cy.visit('http://automationpractice.com/index.php')
                cy.get('.sf-menu').should('not.be.visible');             
                cy.get('.cat-title').click();              
                cy.get('.sf-menu').find('li').first().click();
                cy.url().should('include', 'controller=category');
            });
        });

        const tabletsize = ['ipad-2','ipad-mini'];
        tabletsize.forEach((tablets)=>{
            it(`runs tests as per the tablet size ${tablets}`,()=>{
                cy.viewport(tablets);
                cy.get('.cat-title').should('not.be.visible');
                cy.get('.sf-with-ul').first().click();
                cy.url().should('include', 'controller=category');
            });
        });
    })
})