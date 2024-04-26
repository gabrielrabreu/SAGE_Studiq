import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Header from "./Header";

describe("Header", () => {
  it("should render", async () => {
    render(
      <MemoryRouter>
        <Header
          userAvatarUrl="https://i.pinimg.com/originals/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
          isDarkMode={false}
          toggleDarkMode={jest.fn()}
          toggleUserMenu={jest.fn()}
        />
      </MemoryRouter>
    );
  });

  it("should call toggleDarkMode when click on button", async () => {
    const mockedToggleDarkMode = jest.fn();

    render(
      <MemoryRouter>
        <Header
          userAvatarUrl="https://i.pinimg.com/originals/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
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

  it("should call toggleUserMenu when click on button", async () => {
    const mockedToggleUserMenu = jest.fn();

    render(
      <MemoryRouter>
        <Header
          userAvatarUrl="https://i.pinimg.com/originals/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
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
