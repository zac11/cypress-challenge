/// <reference types = "Cypress"/>

context('TODO App test',()=>{
    describe("This is for mocking API requests/response",()=>{
        it('Mocking the data',()=>{
            let taskstoAdd =[];
            const count = 15;
            let taskno = 0;
            while(taskno<count){
                let valuecompleted = Cypress._.sample([true,false]);
                taskno+=1;
                let task  = {"text":"mocking BE data for testing"+taskno,"completed":valuecompleted,"id":taskno};
                taskstoAdd.push(task);
            }

            cy.server();
            cy.route('http://localhost:3000/api/todos',taskstoAdd).as('expandedTodoList');
            cy.visit('http://localhost:5000');
            cy.wait('@expandedTodoList');
            cy.get('.todo-list').children().should('have.length',count);
        })
    })
})