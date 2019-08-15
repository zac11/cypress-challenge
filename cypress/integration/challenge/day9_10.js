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
        cy.get('.filename').should('contain','No file selected');
        

        //successfull file name
        const fileName = 'data.txt';
        cy.fixture(fileName).then(fileContent => {
            cy.get('#fileUpload').upload(
                { fileContent, fileName, mimeType: 'text' },
                { subjectType: 'input' },
            );
        });
        cy.get('.filename').should('contain', 'data.txt');
        cy.get("#submitMessage").click();
        cy.get('.alert').should('contain', 'Your message has been successfully sent to our team.');

        cy.get('#contact-link').click();
        const fileName1 = 'data.json';
        cy.fixture(fileName1).then(fileContent => {
            cy.get('#fileUpload').upload(
                { fileContent, 
                    fileName : "data.json"
                    , mimeType: 'application/json' },
                { subjectType: 'input' },
            );
        });
        cy.get('.filename').should('contain', 'data.json');
        cy.get("#submitMessage").click();
        //cy.get('.alert-danger').should('');

    });
});


describe('Use of fixtures and external data placement for convinience',()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.fixture("data.json").as("data");
    });

    it('Searches for product on header page',()=>{
        cy.get("@data").then((datas)=>{
            const input = datas;

            input.forEach(input =>{
                const {product,returned_info} = input;
                cy.searchProduct(product);
                cy.contains(returned_info).should('be.visible');
                cy.get('.search_query').clear();
                cy.get('#searchbox > .btn').click();
                cy.get('.alert').should('contain', 'Please enter a search keyword');
            })
        })
    })
})