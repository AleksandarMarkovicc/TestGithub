/// <reference types = "cypress"/>

describe('Create', ()=>{

    it('test-1', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')


        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type('aleksandar.v.markovic@gmail.com')
        cy.get('[placeholder="Password"]').type('Kursic')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        cy.wait('@getArticles')

        cy.contains('[class="nav-item"]', 'New Article').click()
        cy.wait(4000)

        cy.get('[class="form-group"]').eq(0).type('Arena')
        cy.get('[class="form-group"]').eq(1).type('Arena_1')
        cy.get('[class="form-group"]').eq(2).type('Arena_2')
        cy.get('[class="form-group"]').eq(3).type('arena')
        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()

        cy.wait(4000)

        cy.contains('[class="nav-item"]', 'Home').click()
        
        cy.wait('@getArticles').then(elem =>{
            console.log(elem)
                expect(elem.response.body.articles[0].title).to.equal('Arena')
        })

    })

    it.only('test-2', ()=>{
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('getArticles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/*').as('Article')

        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type('aleksandar.v.markovic@gmail.com')
        cy.get('[placeholder="Password"]').type('Kursic')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        cy.wait('@getArticles')

        cy.contains('[class="nav-item"]', 'New Article').click()

        
        cy.get('[formcontrolname="title"]').type('create2')
        cy.get('[formcontrolname="description"]').type('cetvrtak')
        cy.get('[formcontrolname="body"]').type('vece')
        cy.get('[placeholder="Enter tags"]').type('lol')
        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()

        cy.wait('@Article')

        cy.contains('[class="banner"]', 'create2')

        



    })
})