import { setupWorker } from "msw";
import { handlers } from "./handlers";

const worker = setupWorker(...handlers);

const excludeList = ["/*.[ico|png]"];

export const start = () => {
  worker.start({
    onUnhandledRequest(req, print) {
      if (!excludeList.find((pathRegex) => req.url.pathname.match(pathRegex))) {
        print.warning();
      }
    },
  });
};
