import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Tester account:
// tester5@hackathon2024.com
// `https://staff.brewcode2024.ekspawn.com / jNcfHmCSAjWS`

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
