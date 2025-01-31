/// <reference types = "cypress"/>

import { createArticleElements } from '../support/POM/articlePageElements';
import {articlePageElements} from '../support/POM/articlePageElements';

describe('Edit', ()=>{

    beforeEach('BeforeEach', ()=>{
        cy.login()

    })

    it('test1', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*').as('Article')


        cy.wait('@getArticles')

        cy.clickOnArticle('Arena')

        cy.wait('@Article')

        cy.deleteUp()

        cy.wait('@getArticles')

        cy.get('[class="article-preview"]').should('not.have.value', 'Arena')
        

    })

    it('test-2', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*').as('Article')

        cy.wait('@getArticles')

        cy.clickItem('New Article')
        cy.wait(4000)

        cy.createArticle('ponovo','moratako','opala','5555')
        
        cy.wait('@Article')

        cy.deleteDown()

        cy.wait('@getArticles').then(artic=>{
            console.log(artic)
            expect(artic.response.statusCode).to.equal(200)
        })


    })
})