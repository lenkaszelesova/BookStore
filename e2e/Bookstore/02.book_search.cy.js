/// <reference types="cypress" />

import { bookstore } from '../../support/page-selectors.js'
import BookSearch from '../Bookstore/bookSearch.js'

describe('The Anonymous bookaholics - homepage - search for book "zaklinac"', () => {
    it('Homepage - Bookstore', () => {
        cy.userLogin()
        cy.get(bookstore.search_field).type("zaklínač")
        cy.get(bookstore.btn_search).click()
        cy.get('table tbody tr').should('have.length', 7)
        cy.get(bookstore.book_name_header).its('length').then((len) => {
            cy.log('Number of books found: ' + len)
        })
        cy.BookSearch()
        // BookSearch.search()
        // cy.log(BookSearch.bookID)

        // let bookID = []
        // const books = {}
        // cy.get('.row > .col-md-9 > :nth-child(8').should('have.length', 8)
        // .each((bookPrice, index) => {
        //     const price = bookPrice.text().trim().replace('€', '')
        //     //cy.log(price + ' at index: ' + index)
        //     if(parseFloat(price) > 16.00){
        //         cy.get('.row > .col-md-9 > :nth-child(1) > h4').eq(index)
        //         .each((name) => {
        //             cy.log(name.text() + ', at index: ' + index + ', costs: ' + price)
        //             bookID.push(index)
        //             // books.title = name.text()
        //             // books.cost = price + 1 
                    
        //         })
        //     }
        // })
        // cy.log(bookID)

    })
})
