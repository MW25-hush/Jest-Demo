import Home from "../app/page";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import "../node_modules/@testing-library/jest-dom/vitest";
import userEvent from "../node_modules/@testing-library/user-event";

describe("four properites of the initial testing", () => {
  const name = "ahmad",
    password = "123";

  render(<Home name={name} password={password} />);

  it("should find heading based on the matcher", () => {
    const heading = screen.getByRole("heading", { name: /home/i });

    expect(heading).toBeInTheDocument();
  });

  it("should render the props correctly", () => {
    const nameheading = screen.getByText(name);
    expect(nameheading.innerHTML).toBe(name);
  });

  it("should test the visibility based on the state", async () => {
    expect(
      screen.queryByRole("heading", { name: /this is a visible heading/i })
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByText("Show Heading"));

    expect(
      screen.getByRole("heading", { name: /this is a visible heading/i })
    ).toBeInTheDocument();
  });
});
