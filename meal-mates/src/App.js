import logo from './logo.svg';
import './App.css';
import { getRestInformation } from './Components/YelpAPI';

function App() {
  let ans = getRestInformation('610 Beacon Street Boston MA', [1,2,3,4])
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
