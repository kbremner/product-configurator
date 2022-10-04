import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import App from "./App";

test("has no axe issues", async () => {
  const { container } = render(<App />);

  const result = await axe(container);

  expect(result).toHaveNoViolations();
});

test("fetches products", async () => {
  render(<App />);
  await screen.findByText(/Hardcover Notebook/i);
});
