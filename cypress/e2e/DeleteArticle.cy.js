/// <reference types = "cypress"/>

describe('Edit', ()=>{

    beforeEach('BeforeEach', ()=>{
        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type('aleksandar.v.markovic@gmail.com')
        cy.get('[placeholder="Password"]').type('Kursic')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()
    })

    it('test1', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*').as('Article')


        cy.wait('@getArticles')

        cy.contains('[class="article-preview"]', 'Arena').click()

        cy.wait('@Article')

        cy.get('[class="btn btn-sm btn-outline-danger"]').first().click()

        cy.wait('@getArticles')

        cy.get('[class="article-preview"]').should('not.have.value', 'Arena')

    })

    it.only('test-2', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*').as('Article')

        cy.wait('@getArticles')

        cy.contains('[class="nav-item"]', 'New Article').click()
        cy.wait(4000)

        cy.get('[formcontrolname="title"]').type('sreda')
        cy.get('[formcontrolname="description"]').clear().type('januar')
        cy.get('[formcontrolname="body"]').clear().type('2025')
        cy.get('[placeholder="Enter tags"]').type('23')

        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()
        
        cy.wait('@Article')

        cy.get('[class="btn btn-sm btn-outline-danger"]').last().click()

        cy.wait('@getArticles')






    })
})