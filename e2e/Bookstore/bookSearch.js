class BookSearch {
    search() {
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
        return bookID
    }
}
export default new BookSearch();