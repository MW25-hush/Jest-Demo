import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import "../node_modules/@testing-library/jest-dom/vitest";
import Home from "../app/page";
import ImageGallery from "../app/image/page";

describe("Home Page", () => {
  const user = { name: "ahmad", password: "132" };
  render(<Home {...user} />);
  it("the heading should be in the dom ", () => {
    const heading = screen.getByText(/home/i);
    expect(heading).toBeInTheDocument();
  });

  it("The props shoould work", () => {
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});

describe("Photo Gallery", () => {
  const imageUrlsEmpty: string[] = [];
  const imageUrls: string[] = ["/src/image1", "/src/image2"];

  it("Assert that the dom is empty and null is returned", () => {
    const { container } = render(<ImageGallery imageUrls={imageUrlsEmpty} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("Assert that all images are rendered correctly", () => {
    render(<ImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(imageUrls.length);

    images.forEach((img) => {
      expect(img).toHaveAttribute("src");
    });
  });
});

describe("checking state", () => {
  it("should show the text which is less ", () => {
    render(<ImageGallery />);

    const text = screen.getByText(/short text/i);

    expect(text).toBeInTheDocument();
  });
});
