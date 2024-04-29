describe("Header", () => {
  context("successful", () => {
    beforeEach(() => {
      cy.login();
    });

    it("should render with success", () => {
      cy.visit("/");

      cy.getByTestId("Header_logo_img").should("be.visible");
      cy.getByTestId("Header_home_link").should("be.visible");
      cy.getByTestId("Header_darkMode_button").should("be.visible");
      cy.getByTestId("Header_userAvatar_img").should("be.visible");
    });

    it("should open right menu on click", () => {
      cy.visit("/");

      cy.getByTestId("Header_userAvatar_img").click();

      cy.getByTestId("Header_userAvatar_img").should("not.be.visible");
      cy.getByTestId("RightMenu_username_span").contains("John Doe");
      cy.getByTestId("RightMenu_email_span").contains("johndoe@gmail.com");
    });

    it("should close right menu on click", () => {
      cy.visit("/");

      cy.getByTestId("Header_userAvatar_img").should("be.visible");
      cy.getByTestId("Header_userAvatar_img").click();

      cy.getByTestId("Header_userAvatar_img").should("not.be.visible");
      cy.getByTestId("RightMenu_close_button").click();
      cy.getByTestId("Header_userAvatar_img").should("be.visible");
    });

    it("should logout on click", () => {
      cy.visit("/");

      cy.getByTestId("Header_userAvatar_img").click();
      cy.getByTestId("RightMenu_logout_button").click();

      cy.getByTestId("Login_title").should("be.visible");
    });
  });
});
