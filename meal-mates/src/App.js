import logo from './logo.svg';
import './App.css';
import {getRestInformation} from "./Components/YelpAPI";
import {GeoLocation, wait} from "./Components/GeoLocation";

// for matching, iterate through the type of cousine, in the array, and if matching, hold the information of
// other type of food

function App() {
  // let myLocation = new GeoLocation()
  // let long = myLocation.componentDidMount()

  // Dummy function call to get the closest restaurant from you
  let ans = getRestInformation('610 Beacon Street Boston',[1,2,3,4])
  console.log(ans)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

