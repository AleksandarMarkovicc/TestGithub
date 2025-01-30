/// <reference types = "cypress"/>


describe('Home', ()=>{

    beforeEach('BeforeEach', ()=>{
        cy.login()
    })

    it('test1', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')

        
        cy.wait('@getArticles')

        //cy.get('[class="info"]').eq(0).should('contain', ' aleksandar.v.markovic@gmail.com ')
        //cy.contains('[class="article-preview"]','Aca')


        //cy.get('[class="nav nav-pills outline-active"]').children()
        //cy.contains('[class="nav nav-pills outline-active"]', 'Your Feed')

        
        //cy.get('[class="nav navbar-nav pull-xs-right"]').children().eq(1)
        cy.clickItem('New Article')
        cy.url().should('include', 'https://conduit.bondaracademy.com/editor')

        //cy.get('[class="form-group"]').eq(0).type('Arena')
        //cy.get('[class="form-group"]').eq(1).type('Arena_1')
        //cy.get('[class="form-group"]').eq(2).type('Arena_2')
        //cy.get('[class="form-group"]').eq(3).type('arena')
    })

    it('test-2', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        

        cy.clickItem('Settings')
        cy.wait(4000)

        cy.url().should('include','https://conduit.bondaracademy.com/settings')

    })

    it('test-3', ()=> {
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?author=aleksandar.v.markovic@gmail.com&limit=10&offset=0').as('myArticles')

        cy.clickItem('aleksandar.v.markovic@gmail.com')
        cy.wait('@myArticles')
    })
})