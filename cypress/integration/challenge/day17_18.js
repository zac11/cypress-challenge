/**
 * API testing using Cypress
 */

 describe("API testing using Cypress",()=>{
     it('makes a call to get the api tests',()=>{
         cy.request('https://reqres.in/api/users/2').then((response) => {
             console.log(response.body);
             expect(response.body.data).has.property('first_name','Janet')
        });
     
     });

     it('makes another request to another api',()=>{
         cy.request('https://reqres.in/api/users?page=2').then((resp)=>{
             expect(resp.body.data).has.length(6);
             expect(resp.body).has.property('total_pages',2);
             expect(resp.body.data[0].first_name).to.eql('Michael');
             expect(resp.body.data[0]).not.have.property('price');
         })
     })
 });


 describe("Create new POST request",()=>{
     it('makes a post call for API',()=>{
         cy.request({
             url : 'https://reqres.in/api/users',
             method: 'POST',
             body: {
                 "name": "morpheus",
                 "job": "leader"
             }
         }).then((resp)=>{
             console.log(resp.body);
             expect(resp.body).has.property('id');
         });
     });
 });


 describe('This API test is for PUT',()=>{
     it('makes an API call for PUT',()=>{
         cy.request({
             url: 'https://reqres.in/api/users/2',
             method: 'PUT',
             body: {
                 "name": "morpheus",
                 "job": "zion resident"
             }
         }).then((resp)=>{
             expect(resp.body).has.property('updatedAt');
             expect(resp.status).to.eql(200)
         });
     });
 });