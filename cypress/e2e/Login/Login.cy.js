/// <reference types = "cypress"/>

describe ('login', ()=> {

    it('test',()=>{

        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type('aleksandar.v.markovic@gmail.com')
        cy.get('[placeholder="Password"]').type('Kursic')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()
        
        cy.wait(4000)

        //cy.get('[class="article-preview"]')
        cy.get('[class="nav navbar-nav pull-xs-right"]').children().eq(1).click()

        cy.get('[class="form-group"]').eq(0).type('Arena')
        cy.get('[class="form-group"]').eq(1).type('Arena_1')
        cy.get('[class="form-group"]').eq(2).type('Arena_2')
        cy.get('[class="form-group"]').eq(3).type('arena')
        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()

        cy.wait(4000)

        
        cy.get('span').children().eq(1).click()

        cy.wait(4000)

        //cy.get('[class="nav navbar-nav pull-xs-right"]').children().eq(0).click()

        cy.get('[class="article-preview"]').should('not.have.value', 'Arena')


    })
})