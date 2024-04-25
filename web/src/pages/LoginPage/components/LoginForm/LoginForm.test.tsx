import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("should render", async () => {
    render(<LoginForm onLogin={jest.fn()} />);
  });

  it("should render fields", async () => {
    render(<LoginForm onLogin={jest.fn()} />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const rememberMeInput = screen.getByTestId("remember-me-input");
    const submitButton = screen.getByTestId("submit-button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(rememberMeInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("should validate input fields when submit", async () => {
    const handleLogin = jest.fn();

    render(<LoginForm onLogin={handleLogin} />);

    await userEvent.click(screen.getByTestId("submit-button"));

    expect(handleLogin).not.toHaveBeenCalled();
  });

  it("should call onLogin when submit", async () => {
    const mockedHandleLogin = jest.fn();

    render(<LoginForm onLogin={mockedHandleLogin} />);

    await userEvent.type(
      screen.getByTestId("email-input"),
      "valid-email@example.com"
    );
    await userEvent.type(screen.getByTestId("password-input"), "password");

    await userEvent.click(screen.getByTestId("submit-button"));

    expect(mockedHandleLogin).toHaveBeenCalledTimes(1);
    expect(mockedHandleLogin).toHaveBeenCalledWith({
      email: "valid-email@example.com",
      password: "password",
      rememberMe: false,
    });
  });
});
