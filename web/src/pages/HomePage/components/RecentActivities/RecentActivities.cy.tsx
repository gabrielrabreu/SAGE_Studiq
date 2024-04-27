import RecentActivities from "./RecentActivities";

describe("RecentActivities", () => {
  it("renders the card list", () => {
    cy.mount(
      <RecentActivities
        items={[
          {
            id: "1",
            imageUrl: "image1.png",
            title: "Title1",
            tags: ["Tag1"],
            authorName: "Author1",
            authorAvatarUrl: "author1.png",
          },
          {
            id: "2",
            imageUrl: "image2.png",
            title: "Title2",
            tags: ["Tag2"],
            authorName: "Author2",
            authorAvatarUrl: "author2.png",
          },
        ]}
      />
    );

    cy.get("[data-testid=card]").should("have.length", 2);
  });
});
