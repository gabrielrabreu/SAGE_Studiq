import UserMenu from "./UserMenu";

describe("UserMenu", () => {
  it("renders the user menu", () => {
    cy.mount(
      <UserMenu
        isOpen={true}
        userAvatarUrl=""
        userName=""
        userEmail=""
        onClose={() => {}}
        onLogout={() => {}}
      />
    );

    cy.get("[data-testid=user-menu-div]").should("be.visible");
  });
});
