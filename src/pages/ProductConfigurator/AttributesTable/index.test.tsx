import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import AttributesTable from ".";

const renderComp = () =>
  render(
    <AttributesTable
      selectedProduct={
        {
          price: 12.34,
          attributes: [
            { id: "cc1", label: "test colour" },
            { id: "pt1", label: "test page type" },
            { id: "pc1", label: "test page count" },
          ],
        } as any
      }
    />
  );

describe("AttributesTable", () => {
  test("has no axe issues", async () => {
    const { container } = renderComp();

    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });

  test.each([
    ["price", /£12.34/i],
    ["colour", /test colour/i],
    ["page type", /test page type/i],
    ["page count", /test page count/i],
  ])("Renders %p", async (_, regex) => {
    renderComp();
    await screen.findByText(regex);
  });
});
