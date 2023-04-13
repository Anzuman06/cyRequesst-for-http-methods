/// <reference types="Cypress" />
describe('GET user details',() => {
    it('test on get a user by his id', () => {
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/953479'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data).has.property('name','Bankimchandra Desai')
            expect(res.body.data).has.property('email','desai_bankimchandra@cassin-beatty.net')
        })    
    }) 
  })