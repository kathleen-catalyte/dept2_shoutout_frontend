import { render, screen } from "@testing-library/react";

import ShoutoutComp from "../shoutoutcomp";

const mockShoutout = require("./mockShoutout.json");

describe("Shoutout Component", () => {
  test("renders shoutout component", () => {
    render(<ShoutoutComp shoutout={mockShoutout} />);

    expect(screen.getByTestId("custom-element")).toBeInTheDocument();
  });
});
