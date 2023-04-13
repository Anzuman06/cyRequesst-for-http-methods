/// <reference types="Cypress" />

describe('Delete user request', () => {
 let accessToken = '6e31b89d87011fbbbf6a8ad029cfc18eae85c6e565bcad00ee59c9ac1f247fa8';
 it('test on create a new user on the list and then delete', () =>{
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v1/users',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
                body: {
                           "name":"Anzuman+@Snigdha",
                           "gender":"female",
                           "email":"testp2t#1_m@gmail.com",
                           "status":"active"
                  }
   
            }).then((res)=>{
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email','testp2t#1_m@gmail.com')
                expect(res.body.data).has.property('name','Anzuman+@Snigdha')
            }).then((res) =>{
                   const userId = res.body.data.id 
                    cy.log("user id is: " + userId)
                    //2. delete user (DELETE)
                    cy.request({
                        method: 'DELETE',
                        url: 'https://gorest.co.in/public/v1/users/'+userId,
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        }
                    }).then((res)=>{
                        expect(res.status).to.eq(204)
                    })
            })
                   
            })
            
        
        
    })
