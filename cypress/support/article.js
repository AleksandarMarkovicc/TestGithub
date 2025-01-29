Cypress.Commands.add('clickOnArticle',(art)=>{
    cy.contains('[class="article-preview"]', art).click()
})


Cypress.Commands.add('editDown',()=>{
    cy.get('[class="btn btn-sm btn-outline-secondary"]').last().click()
})
Cypress.Commands.add('editUp',()=>{
    cy.get('[class="btn btn-sm btn-outline-secondary"]').first().click()
})

Cypress.Commands.add('userProfilUp', ()=>{
    cy.get('[class="info"]').first().click()
})

Cypress.Commands.add('userProfilDown', ()=>{
    cy.get('[class="info"]').last().click()
})
