import { initialize, mswDecorator } from "msw-storybook-addon";
import { handlers } from "../src/mocks/handlers";
import "../src/index.css";

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: {
      api: handlers,
    },
  },
};
