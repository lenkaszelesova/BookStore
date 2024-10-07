/// <reference types="cypress" />

import {bookstore} from '../../support/page-selectors.js'

describe('The Anonymous bookaholics - homepage', () => {
  it('Update the price of books as admin', () => {
    cy.adminLogin()
    cy.adminBookSearch()
    // cy.get(bookstore.admin.book).click()
    // cy.get(bookstore.admin.bookList).click()
    // cy.get(bookstore.admin.bookTableListLenght).select(4)
    // cy.get(bookstore.admin.bookSearch).type("zaklínač")
    // cy.get(bookstore.admin.bookListTable).find('tbody > tr').should('have.length', 7)
    

    // let bookIDs = [4, 6]
    let firstUrl = 'http://52.58.44.98:8080/book/bookInfo?id=6'
    let secondUrl = 'http://52.58.44.98:8080/book/bookInfo?id=8'
    
    cy.visit(firstUrl)
    cy.get(bookstore.admin.btn_edit).click()
    cy.get(bookstore.admin.listPrice).then(($price) => {
      const bookPrice = cy.wrap($price).then(($value) => {
        const bookListPrice = parseFloat($value.val())
        cy.log(bookListPrice)
        if (bookListPrice > 16.00) {
          cy.wrap($price).clear().type('16.00')
          cy.get(bookstore.admin.updateBook).click()
          cy.get('.breadcrumb > :nth-child(1) > a').click()
          cy.get(':nth-child(5) > :nth-child(6)').invoke('text').should('contain', '16.0')
        }
        else {
          cy.adminBookSearch()
        }
      })
    })

    cy.visit(secondUrl)
    cy.get(bookstore.admin.btn_edit).click()
    cy.get(bookstore.admin.listPrice).then(($price) => {
      const bookPrice = cy.wrap($price).then(($value) => {
        const bookListPrice = parseFloat($value.val())
        cy.log(bookListPrice)
        if (bookListPrice > 16.00) {
          cy.wrap($price).clear().type('16.00')
          cy.get(bookstore.admin.updateBook).click()
          cy.get('.breadcrumb > :nth-child(1) > a').click()
          cy.get(':nth-child(7) > :nth-child(6)').invoke('text').should('contain', '16.0')
        }
        else {
          cy.adminBookSearch()
        }
      })
    })

  //   // cy.get(bookstore.admin.bookListTable).then(($bookTable) => {
  //   //   cy.wrap($bookTable).find('tbody > tr').then(($bookRow) => {
  //   //     cy.wrap($bookRow).should('have.length', 7)
  //   //     cy.get(':nth-child(1) > :nth-child(2) > a > span').click()
  //   //     cy.get(bookstore.admin.btn_edit).click()
  //   //     cy.get(bookstore.admin.listPrice).then(($price) => {
  //   //       const bookPrice = cy.wrap($price).then(($value) => {
  //   //         const bookListPrice = parseFloat($value.val())
  //   //         cy.log(bookListPrice)
  //   //         if (bookListPrice > 16.00) {
  //   //           cy.wrap($price).clear().type('16.00')
  //   //           cy.get(bookstore.admin.updateBook).click()
  //   //         }
  //   //         else {
  //   //           cy.BookSearch()
  //   //         }
  //   //       })
  //   //     })
  //   //     cy.get(':nth-child(2) > :nth-child(2) > a > span').click()
  //   //     cy.get(bookstore.admin.btn_edit).click()
  //   //     cy.get(bookstore.admin.listPrice).then(($price) => {
  //   //       const bookPrice = cy.wrap($price).then(($value) => {
  //   //         const bookListPrice = parseFloat($value.val())
  //   //         cy.log(bookListPrice)
  //   //         if (bookListPrice > 16.00) {
  //   //           cy.wrap($price).clear().type('16.00')
  //   //           cy.get(bookstore.admin.updateBook).click()
  //   //         }
  //   //         else {
  //   //           cy.BookSearch()
  //   //         }
  //   //       })
  //   //     })
  //   //     cy.get(':nth-child(3) > :nth-child(2) > a > span').click()
  //   //     cy.get(bookstore.admin.btn_edit).click()
  //   //     cy.get(bookstore.admin.listPrice).then(($price) => {
  //   //       const bookPrice = cy.wrap($price).then(($value) => {
  //   //         const bookListPrice = parseFloat($value.val())
  //   //         cy.log(bookListPrice)
  //   //         if (bookListPrice > 16.00) {
  //   //           cy.wrap($price).clear().type('16.00')
  //   //           cy.get(bookstore.admin.updateBook).click()
  //   //         }
  //   //         else {
  //   //           cy.BookSearch()
  //   //         }
  //   //       })
  //   //     })
  //   //     cy.get(':nth-child(4) > :nth-child(2) > a > span').click()
  //   //     cy.get(bookstore.admin.btn_edit).click()
  //   //     cy.get(bookstore.admin.listPrice).then(($price) => {
  //   //       const bookPrice = cy.wrap($price).then(($value) => {
  //   //         const bookListPrice = parseFloat($value.val())
  //   //         cy.log(bookListPrice)
  //   //         if (bookListPrice > 16.00) {
  //   //           cy.wrap($price).clear().type('16.00')
  //   //           cy.get(bookstore.admin.updateBook).click()
  //   //         }
  //   //         else {
  //   //           cy.BookSearch()
  //   //         }
  //   //       })
  //   //     })
  //   //     cy.get(':nth-child(5) > :nth-child(2) > a > span').click()
  //   //     cy.get(bookstore.admin.btn_edit).click()
  //   //     cy.get(bookstore.admin.listPrice).then(($price) => {
  //   //       const bookPrice = cy.wrap($price).then(($value) => {
  //   //         const bookListPrice = parseFloat($value.val())
  //   //         cy.log(bookListPrice)
  //   //         if (bookListPrice > 16.00) {
  //   //           cy.wrap($price).clear().type('16.00')
  //   //           cy.get(bookstore.admin.updateBook).click()
  //   //           cy.get('.breadcrumb > :nth-child(1) > a').click()
  //   //         }
  //   //         else {
  //   //           cy.BookSearch()
  //   //         }
  //   //       })
  //   //     })
  //   //     cy.get(':nth-child(6) > :nth-child(2) > a > span').click()
  //   //     cy.get(bookstore.admin.btn_edit).click()
  //   //     cy.get(bookstore.admin.listPrice).then(($price) => {
  //   //       const bookPrice = cy.wrap($price).then(($value) => {
  //   //         const bookListPrice = parseFloat($value.val())
  //   //         cy.log(bookListPrice)
  //   //         if (bookListPrice > 16.00) {
  //   //           cy.wrap($price).clear().type('16.00')
  //   //           cy.get(bookstore.admin.updateBook).click()
  //   //         }
  //   //         else {
  //   //           cy.BookSearch()
  //   //         }
  //   //       })
  //   //     })
  //   //     cy.get(':nth-child(7) > :nth-child(2) > a > span').click()
  //   //     cy.get(bookstore.admin.btn_edit).click()
  //   //     cy.get(bookstore.admin.listPrice).then(($price) => {
  //   //       const bookPrice = cy.wrap($price).then(($value) => {
  //   //         const bookListPrice = parseFloat($value.val())
  //   //         cy.log(bookListPrice)
  //   //         if (bookListPrice > 16.00) {
  //   //           cy.wrap($price).clear().type('16.00')
  //   //           cy.get(bookstore.admin.updateBook).click()
  //   //           cy.get('.breadcrumb > :nth-child(1) > a').click()
  //   //         }
  //   //         else {
  //   //           cy.BookSearch()
  //   //         }
  //   //       })
  //   //     })
  //   //     // cy.get('.breadcrumb > :nth-child(1) > a').click()
  //   //   })
  // })
  })
})