import { describe, it, expect } from "vitest";
import { render, screen } from "./utils/test-utils";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("checking whether vite+react text exists", () => {
    render(<App />);
    const text = screen.getByText("Vite + React");
    expect(text).toBeInTheDocument();
  });

  it("should increment on click", async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    expect(await screen.findByText("count is 1")).toBeInTheDocument();
  });

 
});

describe("test", () => {
    it("should pass", () => {
      expect(true).toBeTruthy();
    });
  });