import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  it("should render", async () => {
    render(
      <Card
        imageUrl="https://static.vecteezy.com/system/resources/previews/000/116/431/large_2x/moon-phase-vector.jpg"
        title="Title"
        tags={["Tag"]}
        authorName="Author"
        authorAvatarUrl="https://i.pinimg.com/originals/49/1f/be/491fbeda943fad7a06bd606a7e128fde.png"
      />
    );
  });

  it("should render card with correct content", async () => {
    const imageUrl = "example.jpg";
    const title = "Example Title";
    const tags = ["Tag1", "Tag2"];
    const authorName = "John Doe";
    const authorAvatarUrl = "avatar.jpg";

    render(
      <Card
        imageUrl={imageUrl}
        title={title}
        tags={tags}
        authorName={authorName}
        authorAvatarUrl={authorAvatarUrl}
      />
    );

    const cardImage = screen.getByTestId("card-image");
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveAttribute("src", imageUrl);

    const cardTitle = screen.getByTestId("card-title");
    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle).toHaveTextContent(title);

    tags.forEach((tag, index) => {
      const cardTag = screen.getByTestId(`card-tag-${index}`);
      expect(cardTag).toBeInTheDocument();
      expect(cardTag).toHaveTextContent(tag);
    });

    const cardAuthorAvatar = screen.getByTestId("card-author-avatar");
    expect(cardAuthorAvatar).toBeInTheDocument();
    expect(cardAuthorAvatar).toHaveAttribute("src", authorAvatarUrl);

    const cardAuthorName = screen.getByTestId("card-author-name");
    expect(cardAuthorName).toBeInTheDocument();
    expect(cardAuthorName).toHaveTextContent(authorName);
  });
});
