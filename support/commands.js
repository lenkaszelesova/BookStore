// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {bookstore} from '../support/page-selectors.js'

Cypress.Commands.add('adminLogin', () => {
    cy.visit(Cypress.env('adminUrl'))
    cy.get(bookstore.username).type('admin')
    cy.get(bookstore.password).type('admin')
    cy.get(bookstore.admin.admin_signin).click()
})

Cypress.Commands.add('adminBookSearch', () => {
    cy.get(bookstore.admin.book).click()
    cy.get(bookstore.admin.bookList).click()
    cy.get(bookstore.admin.bookTableListLenght).select(4)
    cy.get(bookstore.admin.bookSearch).type("zaklínač")
    cy.get(bookstore.admin.bookListTable).find('tbody > tr').should('have.length', 7)
})

Cypress.Commands.add('userLogin', () => {
    cy.visit('baseUrl')
    cy.get(bookstore.login).click()
    cy.get(bookstore.username).type('j')
    cy.get(bookstore.password).type('p')
    cy.get('#tab-2 > .panel-group > .card > .card-body > form > .btn').click()
})

Cypress.Commands.add('BookSearch', () => {
    // cy.get(bookstore.admin.book).click()
    // cy.get(bookstore.admin.bookList).click()
    // cy.get(bookstore.admin.bookSearch).clear()
    // cy.get(bookstore.admin.bookTableListLenght).select('All')
    // cy.get(bookstore.admin.bookListTableInfo).should('contain.text', 'Showing 1 to 56 of 56 entries')
    // cy.get(bookstore.admin.bookSearch).should('be.visible').type('zakl')
    const bookID = [];
    cy.get('.row > .col-md-9 > :nth-child(8').should('have.length', 8)
    .each((bookPrice, index) => {
        const price = bookPrice.text().trim().replace('€', '')
        //cy.log(price + ' at index: ' + index)
        if(parseFloat(price) > 16.00){
            cy.get('.row > .col-md-9 > :nth-child(1) > h4').eq(index)
            .each((name) => {
                cy.log(name.text() + ', at index: ' + index + ', costs: ' + price)
                bookID.push(index)
                // books.title = name.text()
                // books.cost = price + 1 
                
            })
        }
    })
    cy.log(bookID)
    cy.wrap(bookID).as('bookIDs')

})

Cypress.Commands.add('editPrice', () => {
    cy.get(bookstore.admin.btn_edit).click()
    cy.get(bookstore.admin.listPrice).type('16.00')
    cy.get(bookstore.admin.updateBook).click()
    // cy.get(bookstore.admin.bookListTable).then(($bookTable) => {
    //     cy.wrap($bookTable).find('tbody > tr').then(($bookRow) => {
    //         cy.wrap($bookRow).find('td:nth-child(5)').each(($el) => {
    //             const price = parseFloat($el.text())
    //             cy.log(price)
    //             if (price > 16.00) {
    //                 cy.log('Two books cost more than 16 euros.')
    //                 // cy.wrap($bookRow).find('td:nth-child(2)').then(($bookName) => {
    //                 // const book = $bookName.text()
    //                 // cy.log(book)
    //                 //})
    //             }
    //         })
    //     })
    // })
})


