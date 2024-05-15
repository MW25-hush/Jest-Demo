import { render, screen } from "@testing-library/react";
import { expect, describe } from "vitest";
import "@/testing-library/jest-dom/vitest";
import Home from "@/app/page";

describe("Home Page", () => {
  it("the heading should be in the dom ", () => {
    render(<Home />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeDefined();
  });
});
