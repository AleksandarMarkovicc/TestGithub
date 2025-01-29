Cypress.Commands.add('login', ()=>{
    cy.visit('https://conduit.bondaracademy.com/login')
    cy.get('[placeholder="Email"]').type('aleksandar.v.markovic@gmail.com')
    cy.get('[placeholder="Password"]').type('Kursic')
    cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()
})