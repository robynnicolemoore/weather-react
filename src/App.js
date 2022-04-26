import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="Container">
      <div className="App">
        <div className="row">
          <div className="col-6">
            <h1>Madrid</h1>
            <h2>Currently 65°F</h2>
            <p>Last updated: time</p>
            <p>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={200}
                animate={true}
              />
            </p>
            <form>
              <input
                type="search"
                placeholder="Type a city..."
                className="search"
              />
              <input type="submit" value="Search" className="searchButton" />
            </form>
          </div>
          <div className="col-6">
            <h4>Monday</h4>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"goldenrod"}
              size={30}
              animate={true}
            />
            <p> 65°F | 82°F</p>
            <br />
            <h4>Tuesday</h4>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"goldenrod"}
              size={30}
              animate={true}
            />
            <p> 65°F | 82°F</p>
            <br />
            <h4>Wednesday</h4>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"goldenrod"}
              size={30}
              animate={true}
            />
            <p> 65°F | 82°F</p>
            <br />
            <h4>Thursday</h4>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"goldenrod"}
              size={30}
              animate={true}
            />
            <p> 65°F | 82°F</p>
            <br />
            <h4>Friday</h4>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"goldenrod"}
              size={30}
              animate={true}
            />
            <p> 65°F | 82°F</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
