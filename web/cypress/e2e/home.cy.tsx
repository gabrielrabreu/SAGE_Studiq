describe("Home", () => {
  context("successful", () => {
    beforeEach(() => {
      cy.login();
    });

    it("should render with success", () => {
      cy.visit("/");

      cy.getByTestId("Home_title").should("be.visible");
    });
  });
});
