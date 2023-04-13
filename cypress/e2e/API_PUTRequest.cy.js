/// <reference types="Cypress" />
describe('post user request', () => {
    let accessToken = '6e31b89d87011fbbbf6a8ad029cfc18eae85c6e565bcad00ee59c9ac1f247fa8';
       it('test on create a new user on the list', () =>{
               cy.request({
                   method: 'POST',
                   url: 'https://gorest.co.in/public/v1/users',
                   headers: {
                       'Authorization': 'Bearer ' + accessToken
                   },
                   body: {
                               "name": "AnzumanSnigdha",
                               "gender": "female",
                               "email": "test031Y_m.@gmail.com",
                               "status": "active"
                   }
      
               }).then((res)=>{
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email','test031Y_m.@gmail.com')
                expect(res.body.data).has.property('name','AnzumanSnigdha')
                expect(res.body.data).has.property('status','active')
                expect(res.body.data).has.property('gender','female')
               }).then((res) =>{
    const userId = res.body.data.id 
     cy.log("user id is: " + userId)
     //2. update user (PUT)
    cy.request({
    method: 'PUT',
    url: 'https://gorest.co.in/public/v1/users/'+userId,
    headers: {
        'Authorization': 'Bearer ' + accessToken
    },
        body: {
            "name": "Anzuman@Snigdha",
            "gender": "female",
            "email": "testing321_m.@gmail.com",
            "status": "active"
      }
    }).then((res)=>{
    expect(res.status).to.eq(200)
    expect(res.body.data).has.property('email','testing321_m.@gmail.com')
    expect(res.body.data).has.property('name','Anzuman@Snigdha')
    expect(res.body.data).has.property('status','active')
    expect(res.body.data).has.property('gender','female')
    })
  })
 })
})