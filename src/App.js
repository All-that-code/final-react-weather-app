import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App({ setAppBackground }) {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" setAppBackground={setAppBackground} />
        <footer>
          Project coded by Amaia Arbizu and open-sourced on{" "}
          <a
            className="Github-link"
            href="https://github.com/All-that-code/final-react-weather-app"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
