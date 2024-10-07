/// <reference types="cypress" />

import {bookstore} from '../../support/page-selectors.js'

describe('The Anonymous bookaholics - login as user', () => {
  it('Homepage - Bookstore', () => {
    cy.visit('baseUrl')
    cy.get(bookstore.login).click()
    cy.get(bookstore.username).type('j')
    cy.get(bookstore.password).type('p')
    cy.get('#tab-2 > .panel-group > .card > .card-body > form > .btn').click()
    cy.get(bookstore.logout).should('be.visible').should('contain.text', 'Log Out')
    cy.get('.fa').should('have.length', 9)
    cy.get('.list-menu > ul > li').should('be.visible')
    cy.get('h2').should('be.visible')
    cy.get('.product-item > .product-thumb > .limit > img').should('have.length', 4)
    cy.get('.footer-widget').should('have.length', 4)
  })
})