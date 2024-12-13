// 2 - Transformar o Gherkin em métodos
/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from '../pages/home_page'
import login_page from '../pages/login_page'

const email = 'pablitoqa@tstdoqa.com'
const password = '1122334456'

Given("I am on login screen", () => {
    home_page.accessLogin()
})

Given("I fill e-mail", () => {
    login_page.fillEmail(email)
})

Given("I fill my credentials", () => {
    login_page.fillEmail(email)
    login_page.fillPassword(password)
})

When("I click on login", () => {
    login_page.clickLogin()
})

Then("I see the message {string}", (message) => {
    login_page.messageError(message)
})

Then("I see the success message", () => {
    login_page.successMessage(email)
})
