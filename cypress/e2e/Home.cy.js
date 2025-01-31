/// <reference types = "cypress"/>


describe('Home', ()=>{

    beforeEach('BeforeEach', ()=>{
        cy.login()
    })

    it('test1', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')

        cy.wait('@getArticles')

        cy.clickItem('New Article')
        cy.url().should('include', 'https://conduit.bondaracademy.com/editor')

       
    })

    it('test-2', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        
        cy.wait('@getArticles')

        cy.clickItem('Settings')
        cy.wait(4000)

        cy.url().should('include','https://conduit.bondaracademy.com/settings')

        cy.get('[class="text-xs-center"]').should('have.text','Your Settings')

    })

    it('test-3', ()=> {
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?author=aleksandar.v.markovic@gmail.com&limit=10&offset=0').as('myArticles')

        cy.wait('@getArticles')
        cy.clickItem('aleksandar.v.markovic@gmail.com')
        
        cy.wait('@myArticles')
        cy.clickItem('My Posts')
        
        cy.get('[class="ion-gear-a"]').last().click()
        cy.url().should('include','https://conduit.bondaracademy.com/settings')
    })
})