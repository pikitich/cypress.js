describe('Автотесты формы логина/пароля', function () {
    it('1.1 Вводим корректные данные', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
         cy.reload();
     })

     it('1.2 Логика восстановления пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('xiao@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
        cy.reload();
        
    })

    it('1.3 Правильный логин/НЕправильный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.reload();
    })

    it('1.4 НЕправильный логин/правильный пароль', function () {
        cy.get('#mail').type('xiao@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.reload();
    })

    it('1.5 Невалидный логин/правльный пароль', function () {
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
        cy.reload();
    })

    it('1.6 Приведение к lowcase', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.reload();
    })
 })
 