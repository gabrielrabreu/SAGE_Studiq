import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Root from "./Root";

describe("Root", () => {
  it("should render", async () => {
    render(
      <MemoryRouter>
        <Root />
      </MemoryRouter>
    );
  });
});
