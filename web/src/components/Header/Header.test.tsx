import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from "./Header";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  it("should render", async () => {
    render(
      <MemoryRouter>
        <Header
          userAvatarUrl="https://i.pinimg.com/originals/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
          isDarkMode={false}
          toggleDarkMode={jest.fn()}
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
        />
      </MemoryRouter>
    );

    const toggleDarkModeButton = screen.getByTestId("toggle-dark-mode-button");
    expect(toggleDarkModeButton).toBeInTheDocument();

    await userEvent.click(toggleDarkModeButton);
    expect(mockedToggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
