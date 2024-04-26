import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Layout from "./Layout";
import userEvent from "@testing-library/user-event";

const mockedGetSessionUser = jest.fn();
const mockedRemoveAll = jest.fn();
jest.mock("../../utils/local-storage.utils", () => ({
  getSessionUser: () => mockedGetSessionUser,
  removeAll: () => mockedRemoveAll,
}));

describe("Layout", () => {
  it("should render", async () => {
    window.matchMedia = jest.fn().mockReturnValueOnce({ matches: true });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
  });

  it("renders dark mode when prefers dark mode", async () => {
    window.matchMedia = jest.fn().mockReturnValueOnce({ matches: true });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(document.documentElement.classList.contains("dark")).toBeTruthy();
  });

  it("toggles dark mode when the header button is clicked", async () => {
    window.matchMedia = jest.fn().mockReturnValueOnce({ matches: true });
    mockedGetSessionUser.mockReturnValueOnce({
      avatarUrl: "",
      name: "",
      email: "",
    });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(document.documentElement.classList.contains("dark")).toBeTruthy();

    const toggleButton = screen.getByTestId("toggle-dark-mode-button");
    await userEvent.click(toggleButton);

    expect(
      document.documentElement.classList.contains("dark")
    ).not.toBeTruthy();
  });

  it("should render user menu when click button to toggle it", async () => {
    window.matchMedia = jest.fn().mockReturnValueOnce({ matches: true });
    mockedGetSessionUser.mockReturnValueOnce({
      avatarUrl: "",
      name: "",
      email: "",
    });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const toggleUserMenuButton = screen.getByTestId("toggle-user-menu-button");
    await userEvent.click(toggleUserMenuButton);

    const closeButton = screen.getByTestId("close-button");
    expect(closeButton).toBeInTheDocument();

    await userEvent.click(closeButton);
    expect(closeButton).not.toBeInTheDocument();
  });

  it("should call onLogout when click button logout", async () => {
    window.matchMedia = jest.fn().mockReturnValueOnce({ matches: true });
    mockedGetSessionUser.mockReturnValueOnce({
      avatarUrl: "",
      name: "",
      email: "",
    });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const toggleUserMenuButton = screen.getByTestId("toggle-user-menu-button");
    await userEvent.click(toggleUserMenuButton);

    const logoutButton = screen.getByTestId("logout-button");
    await userEvent.click(logoutButton);
  });
});
