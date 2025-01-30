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


        cy.wait('@getArticles')

        cy.clickOnArticle('blok004')

        cy.wait('@Article')

        //cy.get('[class="btn btn-sm btn-outline-secondary"]').eq(0).click()-POM 
        cy.editUp()

        cy.wait(4000)

        cy.get(createArticleElements.title).click()
            .clear()
            .type('blok004')
        cy.get(createArticleElements.description).click()
            .clear()
            .type('description13')
        cy.get(createArticleElements.body)
            .clear()
            .type('body13')
        cy.get(createArticleElements.tags).type('pom3')
        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()

        cy.wait('@Article')
        
        //cy.get('[class="container"]').should('contain','title002')
        cy.get('h1').should('have.text','blok004')

        cy.userProfilUp()
        //user profil
        cy.wait(4000)
        
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

        //cy.contains('[class="article-preview"]', 'title002').click()
        cy.clickOnArticle('title002')

        cy.wait('@Article')

        //cy.get('[class="btn btn-sm btn-outline-secondary"]').last().click()-komanda
        cy.editDown()

        cy.wait(4000)

        //cy.get('[formcontrolname="title"]').type('create2')
        //cy.get('[formcontrolname="description"]').type('cetvrtak')
        cy.get(createArticleElements.body).click()
            .clear()
            .type('moraClick')
        //cy.get('[placeholder="Enter tags"]').type('lol')
        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()

        cy.wait('@Article').then(elem =>{
            console.log(elem)
            expect(elem.response.body.article.body).to.equal('moraClick')
        })


        
        //cy.get(articlePageElements.title).should('have.text', 'title002')-radi pom






    })

})