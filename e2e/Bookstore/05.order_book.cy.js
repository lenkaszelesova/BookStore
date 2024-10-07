/// <reference types="cypress" />

import {bookstore} from '../../support/page-selectors.js'
import { faker } from '@faker-js/faker';

describe('The Anonymous bookaholics - complete book order', () => {
  it('Homepage - Bookstore', () => {
    let userName = "Elena Hudak"
    let street = "Pri studnicke"
    let streetNumber = "25"
    let city = "Kosice"
    let zipcode = "04011"
    let cardName = "Elena Hudak"
    let cardNumber = "1234432156788765"
    let cvCode = "765"
    cy.userLogin()
    cy.get(bookstore.search_field).type("zaklínač")
    cy.get(bookstore.btn_search).click()
    cy.get(':nth-child(1) > .row > .col-md-9 > :nth-child(1) > h4').click()
    cy.get(bookstore.add_to_cart).click(),
    cy.get('.row > :nth-child(2) > :nth-child(1) > span').should(($element) => {
        expect($element).to.contain('Added to cart')
    })
    cy.get(bookstore.shopping_cart).click()
    cy.get(':nth-child(5) > form').should(($cart) => {
      expect($cart.eq(0)).to.contain('Zaklínač I.: Posledné želanie')
    })
    cy.get(bookstore.checkout).click()
    cy.get(bookstore.shipping_address.name).type(userName)
    cy.get(bookstore.shipping_address.street_address1).type(street)
    cy.get(bookstore.shipping_address.street_address2).type(streetNumber)
    cy.get(bookstore.shipping_address.city).type(city)
    cy.get(bookstore.shipping_address.state).select(12)
    cy.get(bookstore.shipping_address.zipcode).type(zipcode)
    cy.get(bookstore.shipping_address.next).click()
    cy.get(bookstore.payment_information.card_type).select(2)
    cy.get(bookstore.payment_information.card_name).type(cardName)
    cy.get(bookstore.payment_information.card_number).type(cardNumber)
    cy.get(bookstore.payment_information.expiration_date1).select(3)
    cy.get(bookstore.payment_information.expiration_date2).select(5)
    cy.get(bookstore.payment_information.cv_code).type(cvCode)
    cy.get(bookstore.payment_information.same_as_shipping).check()
    cy.get(bookstore.payment_information.next).click()
    cy.get(bookstore.payment_information.place_order).click()
  })
})