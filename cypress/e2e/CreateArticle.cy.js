/// <reference types = "cypress"/>
import { createArticleElements } from '../support/POM/articlePageElements';
import {articlePageElements} from '../support/POM/articlePageElements';

describe('Create', ()=>{

    beforeEach('BeforeEach',()=>{
        cy.login()
    })

    it('test-1', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')


        cy.wait('@getArticles')

        cy.clickItem('New Article')
        cy.wait(4000)

        cy.createArticle('milica','suza','ana','ivana')

        cy.wait(4000)

        cy.clickItem('Home')
        
        cy.wait('@getArticles').then(elem =>{
            console.log(elem)
                expect(elem.response.body.articles[0].title).to.equal('milica')
        })

    })

    it('test-2', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*').as('Article')


        cy.wait('@getArticles')

        cy.clickItem('New Article')

        cy.createArticle('beograd','novi sad','kragujevac','nis')
        

        cy.wait('@Article')


        cy.get(articlePageElements.title).should('have.text','beograd')


    })
})