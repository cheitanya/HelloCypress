describe('empty spec', () => {

  it('passes', () => {

    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.contains('Create a new account').click()
    cy.get('#spree_user_email').type('testdata' + val + '@email.com')
    cy.get('#spree_user_password').type('aabbccdd')
    cy.get('#spree_user_password_confirmation').type('aabbccdd')
    cy.contains('Create').click()
    cy.get('#content > div.flash.notice').should('have.text', 'Welcome! You have signed up successfully.')
  })

})
