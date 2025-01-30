Cypress.Commands.add('clickOnArticle',(art)=>{
    cy.contains('[class="article-preview"]', art).click()
})


Cypress.Commands.add('editDown',()=>{
    cy.get('[class="btn btn-sm btn-outline-secondary"]').last().click()
})
Cypress.Commands.add('editUp',()=>{
    cy.get('[class="btn btn-sm btn-outline-secondary"]').first().click()
})

Cypress.Commands.add('deleteUp',()=>{
    cy.get('[class="btn btn-sm btn-outline-danger"]').first().click()
})
Cypress.Commands.add('deleteDown',()=>{
    cy.get('[class="btn btn-sm btn-outline-danger"]').last().click()
})


Cypress.Commands.add('userProfilUp', ()=>{
    cy.get('[class="info"]').first().click()
})

Cypress.Commands.add('userProfilDown', ()=>{
    cy.get('[class="info"]').last().click()
})

Cypress.Commands.add('createArticle',(step1,step2,step3,step4)=>{
    cy.get('[formcontrolname="title"]').type(step1)
        cy.get('[formcontrolname="description"]').type(step2)
        cy.get('[formcontrolname="body"]').type(step3)
        cy.get('[placeholder="Enter tags"]').type(step4)

        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()
})
