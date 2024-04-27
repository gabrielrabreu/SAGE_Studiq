import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginPage from "./LoginPage";
import authService from "../../services/auth.service";

const mockServiceLogin = jest.fn();
authService.login = mockServiceLogin;

const mockAuthLogin = jest.fn();
jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  useAuth: () => ({
    login: mockAuthLogin,
  }),
}));

describe("LoginPage", () => {
  it("should render", async () => {
    render(<LoginPage />);
  });

  it("should handleLogin when submitting form", async () => {
    const mockedResponse = {
      accessToken: "5efb5f8a-212b-4b22-a201-ba2958005342",
      refreshToken: "91728235-6dab-4a00-93dc-9affb0b0747a",
      userName: "John Doe",
      userEmail: "johndoe@gmail.com",
      userAvatarUrl:
        "https://i.pinimg.com/originals/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg",
    };
    mockServiceLogin.mockResolvedValue({ data: mockedResponse });

    render(<LoginPage />);

    await userEvent.type(
      screen.getByTestId("email-input"),
      "valid-email@example.com"
    );
    await userEvent.type(screen.getByTestId("password-input"), "password");
    await userEvent.click(screen.getByTestId("submit-button"));

    expect(mockAuthLogin).toHaveBeenCalledTimes(1);
    expect(mockAuthLogin).toHaveBeenCalledWith(mockedResponse);
  });
});
