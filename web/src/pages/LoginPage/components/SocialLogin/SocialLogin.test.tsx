import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SocialLogin from "./SocialLogin";

describe("SocialLogin", () => {
  it("should render", async () => {
    render(<SocialLogin onSocialLogin={jest.fn()} />);
  });

  it("should call onSocialLogin when click on google provider", async () => {
    const mockedHandleSocialLogin = jest.fn();

    render(<SocialLogin onSocialLogin={mockedHandleSocialLogin} />);

    const googleButton = screen.getByTestId("google-provider-button");
    expect(googleButton).toBeInTheDocument();

    await userEvent.click(googleButton);

    expect(mockedHandleSocialLogin).toHaveBeenCalledTimes(1);
    expect(mockedHandleSocialLogin).toHaveBeenCalledWith("Google");
  });
});
