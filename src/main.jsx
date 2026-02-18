import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AnimatedCursor from "react-animated-cursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color="255,0,0"
      outerAlpha={0.5}
      innerScale={1.5}
      outerScale={4.5}
    />
    <App />
  </StrictMode>,
);
