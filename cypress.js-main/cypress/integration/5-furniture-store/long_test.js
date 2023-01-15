describe('Автотест магазина мебели', function () {
    it('Покупка нескольких позиций', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.header-search > .search-icon > .razzi-svg-icon').click();
         cy.get('.search-wrapper > .search-field').type('БРОММС Двухместная кровать').type('{enter}');
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').dblclick();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.header-search > .search-icon > .razzi-svg-icon').click();
         cy.get('.search-wrapper > .search-field').type('КЛЛАРИОН Низкий столик').type('{enter}');
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5000);
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Xiao');
         cy.get('#billing_last_name').type('test');
         cy.get('#billing_address_1').type('Лиуэ');
         cy.get('#billing_city').type('Liy E');
         cy.get('#billing_state').type('123');
         cy.get('#billing_postcode').type('350000');
         cy.get('#billing_phone').type('877757390563');
         cy.get('#billing_email').type('test@test.test');
         cy.get('#place_order').click();
         cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');
        })
 })