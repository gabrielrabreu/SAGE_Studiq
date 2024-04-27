/// <reference types="cypress" />

import login from "../selectors/login.selectors";
import header from "../selectors/header.selectors";
import toast from "../selectors/toast.selectors";

describe("Login", () => {
  context("unsuccessful", () => {
    beforeEach(() => {
      cy.intercept("POST", `${Cypress.env("apiUrl")}/login`, {
        statusCode: 400,
        fixture: "bad-request.json",
      });

      cy.visit("/auth/login");
    });

    it("can see error message when username/password incorrect", () => {
      cy.get(login.emailInput).type("email@mail");
      cy.get(login.passwordInput).type("passW!123");
      cy.get(login.signInButton).click();
      cy.get(toast.error).should("be.visible");
    });
  });

  context("successful", () => {
    beforeEach(() => {
      cy.intercept("POST", `${Cypress.env("apiUrl")}/login`, {
        fixture: "login.json",
      });

      cy.visit("/auth/login");
    });

    it("can log in", () => {
      cy.get(login.emailInput).type("email@mail");
      cy.get(login.passwordInput).type("passW!123");
      cy.get(login.signInButton).click();
      cy.get(header.homeLink).should("be.visible");
    });
  });
});
