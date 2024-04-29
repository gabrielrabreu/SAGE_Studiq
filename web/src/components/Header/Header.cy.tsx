import { MemoryRouter } from "react-router-dom";

import { renderWithProvider } from "@/utils/test-utils";

import { Header } from "./Header";

describe("Header", () => {
  it("renders header component correctly", () => {
    const user = {
      id: "1",
      username: "testuser",
      email: "test@example.com",
      avatarUrl: "https://example.com/avatar.jpg",
      accessToken: "5efb5f8a-212b-4b22-a201-ba2958005342",
    };

    const initialState = {
      authReducer: {
        loading: false,
        isAuthenticated: false,
        user: user,
        error: undefined,
      },
    };

    renderWithProvider(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      initialState,
    );

    cy.getByTestId("Header").should("exist");
    cy.getByTestId("Header_logo_img").should("exist");
    cy.getByTestId("Header_home_link").should("contain", "Home");
    cy.getByTestId("Header_darkMode_button").should("exist");
    cy.getByTestId("Header_userAvatar_button").should("exist");
  });

  it("toggles user menu visibility when avatar button is clicked", () => {
    const user = {
      id: "1",
      username: "testuser",
      email: "test@example.com",
      avatarUrl: "https://example.com/avatar.jpg",
      accessToken: "5efb5f8a-212b-4b22-a201-ba2958005342",
    };

    const initialState = {
      authReducer: {
        loading: false,
        isAuthenticated: false,
        user: user,
        error: undefined,
      },
    };

    renderWithProvider(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      initialState,
    );

    cy.getByTestId("UserMenu").should("not.exist");
    cy.getByTestId("Header_userAvatar_button").click();
    cy.getByTestId("UserMenu").should("exist");
    cy.getByTestId("Header_userAvatar_button").click();
    cy.getByTestId("UserMenu").should("not.exist");
  });

  it("toggles dark mode when dark mode button is clicked", () => {
    const user = {
      id: "1",
      username: "testuser",
      email: "test@example.com",
      avatarUrl: "https://example.com/avatar.jpg",
      accessToken: "5efb5f8a-212b-4b22-a201-ba2958005342",
    };

    const initialState = {
      authReducer: {
        loading: false,
        isAuthenticated: false,
        user: user,
        error: undefined,
      },
    };

    cy.window().then((win) => {
      cy.stub(win, "matchMedia").withArgs("(prefers-color-scheme: dark)").returns({
        matches: true,
      });
    });

    renderWithProvider(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      initialState,
    );

    cy.getByTestId("Header_darkMode_MoonIcon").should("exist");
    cy.getByTestId("Header_darkMode_SunIcon").should("not.exist");
    cy.getByTestId("Header_darkMode_button").click();
    cy.getByTestId("Header_darkMode_SunIcon").should("exist");
    cy.getByTestId("Header_darkMode_MoonIcon").should("not.exist");
  });
});
