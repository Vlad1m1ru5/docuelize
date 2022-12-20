import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

if (import.meta.env.MODE === "development") {
  const { worker } = await import("./mocks/browser");
  worker.start();
}

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
