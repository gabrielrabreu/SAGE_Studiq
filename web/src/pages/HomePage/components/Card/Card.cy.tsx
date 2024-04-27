import Card from "./Card";

describe("Card", () => {
  it("renders the card", () => {
    cy.mount(
      <Card
        imageUrl="image.png"
        title="Title"
        tags={["Tag"]}
        authorName="Author"
        authorAvatarUrl="author.png"
      />
    );

    cy.get("[data-testid=card]").should("be.visible");
  });
});
