import { act, render } from "@testing-library/react";

import HomePage from "./HomePage";
import homeService from "../../services/home.service";

const mockServiceRecentActivites = jest.fn();
homeService.recentActivities = mockServiceRecentActivites;
mockServiceRecentActivites.mockResolvedValue({ data: {} });

describe("HomePage", () => {
  it("should render", async () => {
    await act(async () => {
      render(<HomePage />);
    });
  });
});
