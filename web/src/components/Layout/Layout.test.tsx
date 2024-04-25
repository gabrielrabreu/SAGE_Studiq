import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Layout from "./Layout";
import userEvent from "@testing-library/user-event";

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
});
