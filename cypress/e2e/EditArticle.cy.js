/// <reference types = "cypress"/>

import { createArticleElements } from '../support/POM/articlePageElements';
import {articlePageElements} from '../support/POM/articlePageElements';

describe('Edit', () => {

    beforeEach('BeforeEach', () => {
        cy.login()
    })

    it('test1', () => {
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*-14104').as('Article')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?author=aleksandar.v.markovic@gmail.com&limit=10&offset=0').as('myArticles')

        cy.wait('@getArticles')

        cy.clickOnArticle('blok011')

        cy.wait('@Article')

        cy.editUp()

        cy.wait(4000)

        cy.get(createArticleElements.title).click()
            .clear()
            .type('blok022')
        cy.get(createArticleElements.description).click()
            .clear()
            .type('description23')
        cy.get(createArticleElements.body)
            .clear()
            .type('body33')
        cy.get(createArticleElements.tags).type('pom33')
        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()

        cy.wait('@Article')
        
        //cy.get('[class="container"]').should('contain','title002')
        cy.get(articlePageElements.title).should('have.text','blok022')

        cy.userProfilUp()
        //user profil
        cy.wait('@myArticles')

        cy.get('[class="user-info"]').should('have.css', 'color', 'rgb(55, 58, 60)')
        
        //cy.wait('@Article').then(article=>{
            //console.log(article)
            //expect(article.response.body.article.title).to.equal('title002')
        
       // })

        //cy.get('[class="navbar-brand"]').click()

        //cy.wait('@getArticles').then(table => {
        //    console.log(table)
        //    expect(table.response.body.articles[0].title).to.equal('title2')


        //})


    })

    it('test-2', () => {
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*').as('Article')

        cy.wait('@getArticles')

        cy.clickOnArticle('title002')

        cy.wait('@Article')

        cy.editDown()

        cy.wait(4000)

        cy.get(createArticleElements.body).click()
            .clear()
            .type('moraClick')
        
            cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()

        cy.wait('@Article')

        //cy.get('p').should('have.text','moraClick')

        cy.get(articlePageElements.body).should('have.text','moraClick')






    })

})