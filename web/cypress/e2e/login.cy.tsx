describe("Login", () => {
  context("unsuccessful", () => {
    beforeEach(() => {
      cy.intercept("POST", `${Cypress.env("apiUrl")}/login`, {
        statusCode: 400,
        fixture: "bad-request.json",
      });

      cy.visit("/auth/login");
    });

    it("can see error message when submit failed", () => {
      cy.getByTestId("Login_email_input").type("mail@mail");
      cy.getByTestId("Login_password_input").type("Pass!123");
      cy.getByTestId("Login_submit_button").click();
      cy.getByTestId("Login_title").should("be.visible");
      cy.getToastify().should("be.visible");
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
      cy.getByTestId("Login_email_input").type("mail@mail");
      cy.getByTestId("Login_password_input").type("Pass!123");
      cy.getByTestId("Login_submit_button").click();
      cy.getByTestId("Home_title").should("be.visible");
    });
  });
});
