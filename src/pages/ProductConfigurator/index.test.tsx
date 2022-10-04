import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { rest } from "msw";
import ProductConfigurator from ".";
import { server } from "../../mocks/tests";

describe("Product Configurator", () => {
  it("has no axe issues", async () => {
    const { container } = render(<ProductConfigurator />);

    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });

  it("shows a loading message while waiting for API call to finish", () => {
    render(<ProductConfigurator />);

    screen.getByText("Loading...");
  });

  it("shows an error message if the API call fails", async () => {
    server.use(
      rest.get("/api/products", (_req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<ProductConfigurator />);

    await screen.findByText("Oops!");
  });

  describe("when the API call is complete", () => {
    it("selects the first options by default", async () => {
      render(<ProductConfigurator />);

      const colourOption = await screen.findByRole("radio", {
        name: /sunset/i,
      });
      const pageTypeOption = await screen.findByRole("radio", {
        name: /dotted/i,
      });
      expect(colourOption).toBeChecked();
      expect(pageTypeOption).toBeChecked();
    });

    it("renders the title based on the selected product", async () => {
      render(<ProductConfigurator />);

      await screen.findByRole("heading", { name: /moo hardcover notebook/i });
    });

    it("renders the page count for the selected product", async () => {
      render(<ProductConfigurator />);

      await screen.findByRole("cell", { name: /170/ });
    });

    it("renders the page type for the selected product", async () => {
      render(<ProductConfigurator />);

      await screen.findByRole("cell", { name: /dotted/i });
    });

    it("renders the colour for the selected product", async () => {
      render(<ProductConfigurator />);

      await screen.findByRole("cell", { name: /sunset/i });
    });

    it("renders the price for the selected product", async () => {
      render(<ProductConfigurator />);

      await screen.findByRole("cell", { name: /£17.00/i });
    });

    it("Shows the correct header for colour options", async () => {
      render(<ProductConfigurator />);

      await screen.findByRole("heading", { name: /choose your colour/i });
    });

    it("Shows the correct header for page layout", async () => {
      render(<ProductConfigurator />);

      await screen.findByRole("heading", { name: /choose your page layout/i });
    });
  });

  describe("when a new item is selected", () => {
    it("renders the title based on the selected product", async () => {
      render(<ProductConfigurator />);

      const oceanRadio = await screen.findByRole("radio", { name: /ocean/i });
      userEvent.click(oceanRadio);

      await screen.findByRole("heading", { name: /moo hardcover notebook/i });
    });

    it("renders the page count for the selected product", async () => {
      render(<ProductConfigurator />);

      const oceanRadio = await screen.findByRole("radio", { name: /ocean/i });
      userEvent.click(oceanRadio);

      await screen.findByRole("cell", { name: /170/ });
    });

    it("renders the page type for the selected product", async () => {
      render(<ProductConfigurator />);

      const oceanRadio = await screen.findByRole("radio", { name: /ocean/i });
      userEvent.click(oceanRadio);

      await screen.findByRole("cell", { name: /dotted/i });
    });

    it("renders the colour for the selected product", async () => {
      render(<ProductConfigurator />);

      const oceanRadio = await screen.findByRole("radio", { name: /ocean/i });
      userEvent.click(oceanRadio);

      await screen.findByRole("cell", { name: /ocean/i });
    });

    it("renders the price for the selected product", async () => {
      render(<ProductConfigurator />);

      const linedRadio = await screen.findByRole("radio", { name: /lined/i });
      userEvent.click(linedRadio);

      await screen.findByRole("cell", { name: /£15.00/i });
    });
  });
});
