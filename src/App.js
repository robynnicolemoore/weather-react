import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather city="Madrid" />
      <p>
        <a
          href="https://github.com/robynnicolemoore/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by Robyn Moore{" "}
      </p>
    </div>
  );
}

export default App;
