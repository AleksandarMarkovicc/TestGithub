Cypress.Commands.add('clickItem',(item)=>{
    cy.contains('[class="nav-item"]', item).click()
})