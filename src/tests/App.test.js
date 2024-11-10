import { render, screen } from "@testing-library/react";
import { App } from "../app/App";

test("renders app component", async () => {
  render(<App />);
  const app = screen.queryByTestId("app");
  expect(app).not.toBeNull();
});
