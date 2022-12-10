import React from 'react'

import { Location, Match, Pricetag, Header} from './containers';
import { useRef } from 'react';

import './App.css';
import {getRestInformation} from "./Components/YelpAPI";
import {GeoLocation, wait} from "./Components/GeoLocation";

// for matching, iterate through the type of cousine, in the array, and if matching, hold the information of
// other type of food

<<<<<<< HEAD
function App() {
  // let myLocation = new GeoLocation()
  // let long = myLocation.componentDidMount()

  // Dummy function call to get the closest restaurant from you
  let ans = getRestInformation('610 Beacon Street Boston',[1,2,3,4])

=======
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
  
>>>>>>> origin
  return (
    <div className = "App">
      <div ref={section1Ref}>
          <Header
            nextPage={ section2Ref }/>
      </div>
      <div ref={section2Ref}>
          <Pricetag
            nextPage={ section3Ref }/>
      </div>
      <div ref={section3Ref}>
          <Location
            nextPage={ section4Ref }/>
      </div>
      <div ref={section5Ref}>
          <Match />
      </div>

    </div>
  )
}

<<<<<<< HEAD
export default App;

=======
export default App
>>>>>>> origin
