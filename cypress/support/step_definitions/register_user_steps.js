/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from '../pages/home_page'
import register_user_page from "../pages/register_user_page"

//const name = "Pablito"

Given("I am on register screen", () => {
    home_page.accessRegister()
})

Given("I fill name", () => {
    const name = faker.name.fullName()

    register_user_page.fillName(name)
})

Given("I fill e-mail {string}", (email) => {
    register_user_page.fillEmail(email)
})

Given("I fill password {string}", (password) => {
    register_user_page.fillPassword(password)
})

Given("I fill datas of register", () => {
    const name = faker.name.fullName()
    const email = faker.internet.email()
    const password = 123456789
    register_user_page.fillData(name, email, password)
})

When("I click on Register", () => {
    register_user_page.clickRegister()
})

Then("I see the message {string} on register", (message) => {
    register_user_page.messageError(message)  
})

Then("I see the success message on register", () => {
    register_user_page.successMessage()  
})
