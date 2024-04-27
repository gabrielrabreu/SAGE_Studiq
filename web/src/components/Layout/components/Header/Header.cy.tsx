import { MemoryRouter } from "react-router-dom";

import Header from "./Header";

describe("Header", () => {
  it("renders the header", () => {
    cy.mount(
      <MemoryRouter>
        <Header
          userAvatarUrl=""
          isDarkMode={true}
          toggleDarkMode={() => {}}
          toggleUserMenu={() => {}}
        />
      </MemoryRouter>
    );

    cy.get("[data-testid=header-div]").should("be.visible");
  });
});
