/// <reference types = "cypress"/>

import { createArticleElements } from '../support/POM/articlePageElements';
import {articlePageElements} from '../support/POM/articlePageElements';

describe('Edit', ()=>{

    beforeEach('BeforeEach', ()=>{
        cy.login()

        //cy.visit('https://conduit.bondaracademy.com/login')
        //cy.get('[placeholder="Email"]').type('aleksandar.v.markovic@gmail.com')
        //cy.get('[placeholder="Password"]').type('Kursic')
        //cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()
    })

    it('test1', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*').as('Article')


        cy.wait('@getArticles')

        cy.contains('[class="article-preview"]', 'pelikan').click()

        cy.wait('@Article')

        cy.deleteUp()

        cy.wait('@getArticles')

        cy.get('[class="article-preview"]').should('not.have.value', 'pelikan')
        

    })

    it('test-2', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*').as('Article')

        cy.wait('@getArticles')

        cy.contains('[class="nav-item"]', 'New Article').click()
        cy.wait(4000)

        //cy.get('[formcontrolname="title"]').type('sreda')
        //cy.get('[formcontrolname="description"]').type('30januar')
        //cy.get('[formcontrolname="body"]').type('2025')
        //cy.get('[placeholder="Enter tags"]').type('30')
        //cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()
        cy.createArticle('ponovo','moratako','opala','5555')
        
        cy.wait('@Article')

        //cy.clickItem('Home')
        //cy.clickOnArticle('sreda')
        //cy.wait('@Article')
        //cy.get(articlePageElements.title).should('have.text','sreda')


        cy.deleteDown()

        cy.wait('@getArticles').then(artic=>{
            console.log(artic)
            expect(artic.response.statusCode).to.equal(200)
        })


    })
})