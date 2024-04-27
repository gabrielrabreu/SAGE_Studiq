import { render, screen } from "@testing-library/react";

import Layout from "./Layout";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockContextLogout = jest.fn();
jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  useAuth: () => ({
    user: jest.fn(),
    logout: mockContextLogout,
  }),
}));

const mockSetIsDarkMode = jest.fn();
jest.mock("./hooks/useDarkMode", () => ({
  __esModule: true,
  useDarkMode: () => [false, mockSetIsDarkMode],
}));

describe("Layout", () => {
  it("should render", async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
  });

  it("should toggle dark mode on click", async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const toggleDarkModeButton = screen.getByTestId("toggle-dark-mode-button");
    await userEvent.click(toggleDarkModeButton);

    expect(mockSetIsDarkMode).toHaveBeenCalledTimes(1);
  });

  it("should logout on click", async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const toggleUserMenuButton = screen.getByTestId("toggle-user-menu-button");
    await userEvent.click(toggleUserMenuButton);

    const logoutButton = screen.getByTestId("logout-button");
    await userEvent.click(logoutButton);

    expect(mockContextLogout).toHaveBeenCalledTimes(1);
  });
});
