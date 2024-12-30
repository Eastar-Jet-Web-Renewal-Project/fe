import { setupWorker } from "msw/browser";
import { BeerMockAPI } from "@mocks/beer.mock";
import { AuthMockAPI } from "@mocks/auth.mock";


export async function enableMocking() {
  if (import.meta.env.MODE !== "development") {
    return;
  }

  const handler = [...AuthMockAPI, ...BeerMockAPI]
  const worker = setupWorker(...handler);

  return worker.start();
}