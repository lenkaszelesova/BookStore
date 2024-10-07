export const bookstore = {
    login: '[href="/login"]',
    logout: '[href="/logout"]',
    username: '#username',
    password: '#password',
    search_field: '.form-control',
    btn_search: '.btn-default',
    book_name_header: '.row > .col-md-9 > :nth-child(1) > h4',
    add_to_cart: '.card-body > .btn',
    shopping_cart: '[href="/shoppingCart/cart"]',
    checkout: '.text-right > .btn',
    shipping_address: {
        name: '#shippingName',
        street_address1: '#shippingStreet',
        street_address2: '.card-body > :nth-child(3) > .form-control',
        city: '#shippingCity',
        state: '#shippingState',
        zipcode: '#shippingZipcode',
        next: '#shippingInfo > .card-body > .btn',

    },
    payment_information: {
        card_type: '#cardType',
        card_name: '#cardHolder',
        card_number: '#cardNumber',
        expiration_date1: '.row > :nth-child(1) > .form-control',
        expiration_date2: '.row > :nth-child(2) > .form-control',
        cv_code: '#cardCVC',
        same_as_shipping: '#theSameAsShippingAddress',
        next: '#paymentInfo > .card-body > .btn',
        place_order: '#reviewItems > .card-body > .btn',
    },

    admin: {
        admin_signin: '.btn',
        admin_logout: 'href="/logout"',
        book: '.mr-auto > :nth-child(1) > .nav-link',
        bookList: '[href="/book/bookList"]',
        bookSearch: 'label > input',
        bookTableListLenght: 'select',
        bookListTableInfo: '#bookListTable_info',
        bookListTable: '#bookListTable',
        btn_edit: '.breadcrumb > :nth-child(2) > a',
        btn_goBack: '.breadcrumb > :nth-child(1) > a',
        listPrice: '#ourPrice',
        updateBook: '.btn-success'
    }

}