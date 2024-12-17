/// <reference types="cypress" />

export default{
    clickRegister(){
        cy.get('#btnRegister').click()
    },

    fillName(name){
        cy.get('#user')
            .type(name)
    },

    fillEmail(email){
        cy.get('#email')
            .type(email)
    },

    fillPassword(password){
        cy.get('#passwordx')
            .type(password)
    },

    messageError(message){
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', message)
    },

    fillData(name, email, password){
        cy.get('#user')
            .type(name)

        cy.get('#email')
            .type(email)

        cy.get('#password')
            .type(password)
    },

    successMessage(){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
    
    },
}