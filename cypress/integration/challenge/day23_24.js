/// <reference types = "Cypress"/>

context('Slider tests using Cypress',()=>{
    it('Slider tests',()=>{
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
        cy.get('input[type=range]').invoke('val',5).trigger('change');
        cy.get('#range').should('have.text','5');
    });

    it('visits other website to test',()=>{
        cy.fixture('demo_qa_data').as('demo_qa');
        cy.visit('https://demoqa.com/selectmenu/');
        cy.get('@demo_qa').then((data)=>{
            const reqs = data.speedOptions;
            var available = [];
            cy.get('#speed>option').each(($elem)=>{
                available.push($elem.text());
            }).then(()=>{
                console.log(available);
                expect(available).to.be.eql(reqs);
            })
        })
    })
})