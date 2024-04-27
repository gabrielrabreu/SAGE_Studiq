/// <reference types="cypress" />

import login from "../selectors/login.selectors";
import header from "../selectors/header.selectors";

Cypress.Commands.add("login", () => {
  cy.intercept("POST", `${Cypress.env("apiUrl")}/login`, {
    fixture: "login.json",
  });
  cy.visit("/auth/login");
  cy.get(login.emailInput).type("email@mail");
  cy.get(login.passwordInput).type("passW!123");
  cy.get(login.signInButton).click();
  cy.get(header.homeLink).should("be.visible");
});
