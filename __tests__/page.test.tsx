import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByText("Home");

    // with substring
    const paragraph = screen.getByText(/text/i);

    expect(heading).toBeInTheDocument();

    expect(paragraph).toBeInTheDocument();
  });
});
