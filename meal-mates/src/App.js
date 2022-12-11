import logo from './logo.svg';
import './App.css';

const App = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

// for matching, iterate through the type of cousine, in the array, and if matching, hold the information of
// other type of food

function App() {
  // let myLocation = new GeoLocation()
  // let long = myLocation.componentDidMount()

  // Dummy function call to get the closest restaurant from you
  let ans = getRestInformation('610 Beacon Street Boston',[1,2,3,4])
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

>>>>>>> parent of 801583a8 (commit)
