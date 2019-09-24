/**
 * Cypress example using User tokens and uathorization.
 * To get started download from this url - https://github.com/cornflourblue/react-role-based-authorization-example
 * Documentation and installation steps are provided at https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example
 * 
 */


 context('Protected API testing using authorisation',()=>{
     let user;

     const setUser = () =>{
         cy.visit('http://localhost:8080',{
             onBeforeLoad(win){
                 win.localStorage.setItem('user',JSON.stringify(user));
             },
         })
     }

     const authenticateUser = (userRole)=>
         cy.request({
             url: 'http://localhost:4000/users/authenticate',
             method: 'POST',
             body: Cypress.env(userRole)
         }).its('body').then((resp)=>{
             user = resp;
         })

     const getUsers = () =>
         cy.request({
             url: 'http://localhost:4000/users',
             auth : {
                 bearer : user.token,
             }
         })

    describe("Role: Admin",()=>{
        before(()=>{
            authenticateUser('admin');
        })
        beforeEach(setUser);

        it('Admin can get /users',()=>{
            getUsers().then((res=>{
                expect(res.status).to.eq(200)
            }))
        })
    })

 })