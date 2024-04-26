import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserMenu from "./UserMenu";

describe("UserMenu", () => {
  it("should render", async () => {
    render(
      <UserMenu
        isOpen={true}
        userAvatarUrl="userAvatarUrl"
        userName="userName"
        userEmail="userEmail"
        onClose={jest.fn()}
        onLogout={jest.fn()}
      />
    );
  });

  it("should call onClose when click on button", async () => {
    const mockedOnClose = jest.fn();

    render(
      <UserMenu
        isOpen={true}
        userAvatarUrl="userAvatarUrl"
        userName="userName"
        userEmail="userEmail"
        onClose={mockedOnClose}
        onLogout={jest.fn()}
      />
    );

    const closeButton = screen.getByTestId("close-button");
    expect(closeButton).toBeInTheDocument();

    await userEvent.click(closeButton);
    expect(mockedOnClose).toHaveBeenCalledTimes(1);
  });

  it("should call onLogout when click on button", async () => {
    const mockedOnLogout = jest.fn();

    render(
      <UserMenu
        isOpen={true}
        userAvatarUrl="userAvatarUrl"
        userName="userName"
        userEmail="userEmail"
        onClose={jest.fn()}
        onLogout={mockedOnLogout}
      />
    );

    const logoutButton = screen.getByTestId("logout-button");
    expect(logoutButton).toBeInTheDocument();

    await userEvent.click(logoutButton);
    expect(mockedOnLogout).toHaveBeenCalledTimes(1);
  });
});
