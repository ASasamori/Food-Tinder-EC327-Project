import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Person from './components/Person';
import Lonely from './components/Lonely';
import data from './data.json';
import user from './user.json';
import { getRestInformation } from './Components/YelpAPI';

const App = () =>  {
  let ans = getRestInformation('610 Beacon Street Boston MA', [1,2,3,4]);

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


