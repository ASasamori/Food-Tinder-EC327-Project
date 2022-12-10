import { Location, Match, Pricetag, Header} from './containers';
import { useRef } from 'react';

import './App.css';

// for matching, iterate through the type of cousine, in the array, and if matching, hold the information of
// other type of food


import logo from './logo.svg';
import React, { useState } from 'react';
import React from 'react'

import { Location, Match, Pricetag, Header} from './containers';
import { useRef } from 'react';

import './App.css';
import Person from './components/Person';
import Lonely from './components/Lonely';
import data from './data.json';
import user from './user.json';
import { getRestInformation } from './Components/YelpAPI';

const App = () =>  {
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
  
    
  // let myLocation = new GeoLocation()
  // let long = myLocation.componentDidMount()

  // Dummy function call to get the closest restaurant from you
  let ans = getRestInformation('610 Beacon Street Boston MA', [1,2,3,4]);
  console.log(ans)

  //This will read data from the Api which should use the data file
  const [resturants, setResturants] = useState(data);

  //Holds the resturants in arrays based on what the user inputed?
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);
  const [superlike, setSuperlike] = useState([]);
  //This keep tracks of what user is active data. First line in data file should be user info
  //and not a resturant
  const activeUser = 0;

  const removedFromDataSrc = (resturantSource, id) =>
    resturantSource.filter(user => user.id !== id);

  const changeActionChoice = (id, action) => {
    //Adds to the arrays
    const newResturant = [...resturants];
    const newLiked = [...liked];
    const newsuperlike = [...superlike];
    const newdisliked = [...disliked];

    //Based on user input 
    switch (action){
      case 'LIKED_RESTURANT':
        if (!resturants[activeUser].liked.includes(id)) {
          newResturant[activeUser].liked.push(id);
          newLiked.push(data[id]);

          setLiked(newLiked);
          setResturants(removedFromDataSrc(resturants, id));
        }
        break;
      case 'DISLIKED_RESTURANT' :
        if (!resturants[activeUser].disliked.includes(id)) {
          newResturant[activeUser].disliked.push(id);
          newdisliked.push(data[id]);

          setDisliked(newdisliked);
          setResturants(removedFromDataSrc(resturants, id));
        }
        break;
      case 'SUPERLIKE_RESTURANT':
        if (!resturants[activeUser].superlike.includes(id)) {
          newResturant[activeUser].superlike.push(id);
          newsuperlike.push(data[id]);

          setSuperlike(newsuperlike);
          setResturants(removedFromDataSrc(resturants, id));
        }
        break;
      default:
        return resturants;
    }
  }
  }
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

export default App;

