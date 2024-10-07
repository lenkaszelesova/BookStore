/// <reference types="cypress" />

import {bookstore} from '../../support/page-selectors.js'

describe('The Anonymous bookaholics - homepage - search for book "zaklinac" after updaeting the price', () => {
  it('Homepage - Bookstore', () => {
    cy.userLogin()
    cy.get(bookstore.search_field).type("zaklinac")
    cy.get(bookstore.btn_search).click()
    cy.get(bookstore.book_name_header).its('length').then((len) => {
        cy.log('Number of books found: ' + len)
    })

    console.log('Start replacing € from the list')
    const priceList = []
    cy.get('.row > .col-md-9 > :nth-child(8)').each(($el) => {
        const price = $el.text().trim().replace('€', '')
        cy.log(parseFloat(price))
        if (parseFloat(price) > 16.00) {
            cy.log('This book costs: ' + price + ' eur.')
        }

    })
    cy.log('No book costs more than 16.00 euros')
    })
  })
