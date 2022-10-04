import { rest } from "msw";

const getAll = rest.get(
  "/api/products",
  // Example of a response resolver that returns
  // a "Content-Type: application/json" response.
  (_req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.json({
        products: [
          {
            id: "1",
            "product-label": "Hardcover Notebook",
            "product-id": "hardcover-notebook",
            attributes: [
              {
                id: "cc1",
                type: "cover-colour",
                value: "red",
                label: "Sunset",
                selectable: true,
              },
              {
                id: "pt1",
                type: "paper-type",
                value: "dotted",
                label: "Dotted",
                selectable: true,
              },
              {
                id: "pc1",
                type: "page-count",
                value: 170,
                label: "170",
                selectable: false,
              },
            ],
            price: 17,
          },
          {
            id: "2",
            "product-label": "Hardcover Notebook",
            "product-id": "hardcover-notebook",
            attributes: [
              {
                id: "cc1",
                type: "cover-colour",
                value: "red",
                label: "Sunset",
                selectable: true,
              },
              {
                id: "pt1",
                type: "paper-type",
                value: "lined",
                label: "Lined",
                selectable: true,
              },
              {
                id: "pc1",
                type: "page-count",
                value: 176,
                label: "176",
                selectable: false,
              },
            ],
            price: 15,
          },
          {
            id: "3",
            "product-label": "Hardcover Notebook",
            "product-id": "hardcover-notebook",
            attributes: [
              {
                id: "cc1",
                type: "cover-colour",
                value: "blue",
                label: "Ocean",
                selectable: true,
              },
              {
                id: "pt1",
                type: "paper-type",
                value: "dotted",
                label: "Dotted",
                selectable: true,
              },
              {
                id: "pc1",
                type: "page-count",
                value: 170,
                label: "170",
                selectable: false,
              },
            ],
            price: 17,
          },
          {
            id: "4",
            "product-label": "Hardcover Notebook",
            "product-id": "hardcover-notebook",
            attributes: [
              {
                id: "cc1",
                type: "cover-colour",
                value: "blue",
                label: "Ocean",
                selectable: true,
              },
              {
                id: "pt1",
                type: "paper-type",
                value: "lined",
                label: "Lined",
                selectable: true,
              },
              {
                id: "pc1",
                type: "page-count",
                value: 176,
                label: "176",
                selectable: false,
              },
            ],
            price: 15,
          },
        ],
      })
    );
  }
);

const handlers = [getAll];

export default handlers;
