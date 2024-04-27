import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("renders the login form", () => {
    cy.mount(<LoginForm onLogin={() => {}} />);

    cy.get("[data-testid=login-form]").should("be.visible");
  });
});
