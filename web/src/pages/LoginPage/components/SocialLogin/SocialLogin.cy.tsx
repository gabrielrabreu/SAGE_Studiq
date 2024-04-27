import SocialLogin from "./SocialLogin";

describe("SocialLogin", () => {
  it("renders the social login", () => {
    cy.mount(<SocialLogin onSocialLogin={() => {}} />);

    cy.get("[data-testid=social-login-div]").should("be.visible");
  });
});
