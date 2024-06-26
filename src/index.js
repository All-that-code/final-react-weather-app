import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

console.log("PUBLIC_URL:", process.env.PUBLIC_URL);

const root = ReactDOM.createRoot(document.getElementById("root"));

function setAppBackground(imageUrl) {
  document.body.style.backgroundImage = `url(${imageUrl})`;
}

root.render(
  <React.StrictMode>
    <App setAppBackground={setAppBackground} />
  </React.StrictMode>
);

reportWebVitals();
