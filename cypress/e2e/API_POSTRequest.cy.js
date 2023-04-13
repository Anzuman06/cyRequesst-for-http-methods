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
                               "name": "Anzuman_Snigdha",
                               "gender": "female",
                               "email": "test067Y_m.@gmail.com",
                               "status": "active"
                   }
      
               }).then((res)=>{
                   expect(res.status).to.eq(201)
                   expect(res.body.data.email).to.eql('test067Y_m.@gmail.com')
                   expect(res.body.data.name).to.eql('Anzuman_Snigdha')
                   expect(res.body.data.status).to.eql('active')
                   expect(res.body.data.gender).to.eql('female')
               })
})
})
