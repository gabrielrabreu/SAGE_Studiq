import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Header from "./Header";

describe("Header", () => {
  it("should render", async () => {
    render(
      <MemoryRouter>
        <Header
          userAvatarUrl="avatar.jpg"
          isDarkMode={false}
          toggleDarkMode={jest.fn()}
          toggleUserMenu={jest.fn()}
        />
      </MemoryRouter>
    );
  });

  it("should call toggleDarkMode on click", async () => {
    const mockedToggleDarkMode = jest.fn();

    render(
      <MemoryRouter>
        <Header
          userAvatarUrl="avatar.jpg"
          isDarkMode={false}
          toggleDarkMode={mockedToggleDarkMode}
          toggleUserMenu={jest.fn()}
        />
      </MemoryRouter>
    );

    const toggleDarkModeButton = screen.getByTestId("toggle-dark-mode-button");
    expect(toggleDarkModeButton).toBeInTheDocument();

    await userEvent.click(toggleDarkModeButton);
    expect(mockedToggleDarkMode).toHaveBeenCalledTimes(1);
  });

  it("should call toggleUserMenu on click", async () => {
    const mockedToggleUserMenu = jest.fn();

    render(
      <MemoryRouter>
        <Header
          userAvatarUrl="avatar.jpg"
          isDarkMode={false}
          toggleDarkMode={jest.fn()}
          toggleUserMenu={mockedToggleUserMenu}
        />
      </MemoryRouter>
    );

    const toggleUserMenuButton = screen.getByTestId("toggle-user-menu-button");
    expect(toggleUserMenuButton).toBeInTheDocument();

    await userEvent.click(toggleUserMenuButton);
    expect(mockedToggleUserMenu).toHaveBeenCalledTimes(1);
  });
});
