import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

document.documentElement.classList.add("js");

const rootEl = document.getElementById("root");

window.addEventListener("error", (event) => {
  if (!rootEl) return;
  rootEl.innerHTML = `<pre style=\"padding:16px;white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace;\">Runtime error:\\n${event.message}</pre>`;
});

try {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  if (rootEl) {
    rootEl.innerHTML = `<pre style=\"padding:16px;white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace;\">Render error:\\n${error.message}</pre>`;
  }
}
