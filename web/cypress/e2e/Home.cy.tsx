/// <reference types="cypress" />

import recentActivities from "../fixtures/recent-activities.json";

import card from "../selectors/card.selectors";
import home from "../selectors/home.selectors";
import toast from "../selectors/toast.selectors";
import login from "../selectors/login.selectors";
import header from "../selectors/header.selectors";

describe("Home", () => {
  context("unsuccessful", () => {
    beforeEach(() => {
      cy.login();

      cy.intercept("GET", `${Cypress.env("apiUrl")}/recent-activities`, {
        statusCode: 400,
        fixture: "bad-request.json",
      });

      cy.visit("/");

      cy.get(home.title).should("be.visible");
    });

    it("can see error message when request failed", () => {
      cy.get(toast.error).should("be.visible");
    });
  });

  context("successful", () => {
    beforeEach(() => {
      cy.login();

      cy.intercept("GET", `${Cypress.env("apiUrl")}/recent-activities`, {
        fixture: "recent-activities.json",
      });

      cy.visit("/");

      cy.get(home.title).should("be.visible");
    });

    it("list cards", () => {
      cy.get(card.container)
        .should("have.length", 2)
        .each((element, index) => {
          cy.wrap(element).should(
            "contain",
            recentActivities.items[index].title
          );
        });
    });
  });
});
