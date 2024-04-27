import { render, screen } from "@testing-library/react";

import Card from "./Card";
import userEvent from "@testing-library/user-event";

describe("Card", () => {
  it("should render", async () => {
    render(
      <Card
        imageUrl="image.jpg"
        title="Title"
        tags={["Tag"]}
        authorName="Author"
        authorAvatarUrl="avatar.png"
        onClick={jest.fn()}
      />
    );
  });

  it("should call onClick when click on card", async () => {
    const mockOnClick = jest.fn();

    render(
      <Card
        imageUrl="image.jpg"
        title="Title"
        tags={["Tag"]}
        authorName="Author"
        authorAvatarUrl="avatar.png"
        onClick={mockOnClick}
      />
    );

    const card = screen.getByTestId("card");
    await userEvent.click(card);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
