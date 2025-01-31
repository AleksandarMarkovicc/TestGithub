/// <reference types = "cypress"/>

describe ('login', ()=> {

    it('test',()=>{

        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type('aleksandar.v.markovic@gmail.com')
        cy.get('[placeholder="Password"]').type('Kursic')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()
        
        cy.wait(4000)
        cy.url().should('include', 'https://conduit.bondaracademy.com')



    })

    it('test2',()=>{

        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type('aleksandar.v.markovic@gmail.com')
        cy.get('[placeholder="Password"]').type('proba')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        cy.get('[class="error-messages"]').should('have.text', 'email or password is invalid')

    })
})