import { describe, it, expect } from "vitest";
import { render, screen } from "./utils/test-utils";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { server } from "./test/mocks/server";
import { http, HttpResponse } from "msw";

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

 it("api success on load",async()=>{
   render(<App/>);
   expect(await screen.findByText("ToDo list count: 1")).toBeInTheDocument()
 })

 it ("api scenario on fail",()=>{
    render(<App/>);
    server.use(
    http.get("https://dummyjson.com/todos", () => {
        return new HttpResponse(null,{status:401})
        }
    ));
    expect(screen.queryByText("ToDo list count")).not.toBeInTheDocument()
 })
});

describe("test", () => {
    it("should pass", () => {
      expect(true).toBeTruthy();
    });
  });