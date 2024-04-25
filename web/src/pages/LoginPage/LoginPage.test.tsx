import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";

import LoginPage from "./LoginPage";
import axiosInstance from "../../libs/axios/axios.config";

const mockedAxios = new MockAdapter(axiosInstance);

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
}));

describe("LoginPage", () => {
  it("should render", async () => {
    render(<LoginPage />);
  });

  it("should call handleLogin when submitting the login form", async () => {
    const mockedResponse = {
      accessToken: "5efb5f8a-212b-4b22-a201-ba2958005342",
      refreshToken: "91728235-6dab-4a00-93dc-9affb0b0747a",
      userName: "John Doe",
      userEmail: "johndoe@gmail.com",
      userAvatarUrl:
        "https://i.pinimg.com/originals/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg",
    };
    mockedAxios.onPost("/api/login").reply(200, mockedResponse);

    render(<LoginPage />);

    await userEvent.type(
      screen.getByTestId("email-input"),
      "valid-email@example.com"
    );
    await userEvent.type(screen.getByTestId("password-input"), "password");
    await userEvent.click(screen.getByTestId("submit-button"));

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith("/");
  });
});
