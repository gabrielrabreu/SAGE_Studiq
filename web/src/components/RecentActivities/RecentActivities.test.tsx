import { render, screen } from "@testing-library/react";

import RecentActivities from "./RecentActivities";

describe("RecentActivities component", () => {
  it("should render", async () => {
    render(<RecentActivities items={[]} />);
  });

  it("should render with items", () => {
    render(
      <RecentActivities
        items={[
          {
            id: "1",
            imageUrl: "https://example.com/image1.jpg",
            title: "Title 1",
            tags: ["Tag1", "Tag2"],
            authorName: "Author 1",
            authorAvatarUrl: "https://example.com/avatar1.jpg",
          },
          {
            id: "2",
            imageUrl: "https://example.com/image2.jpg",
            title: "Title 2",
            tags: ["Tag3", "Tag4"],
            authorName: "Author 2",
            authorAvatarUrl: "https://example.com/avatar2.jpg",
          },
        ]}
      />
    );

    expect(screen.getAllByTestId("card")).toHaveLength(2);
  });
});
