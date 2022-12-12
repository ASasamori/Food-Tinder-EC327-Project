import React from 'react'
import ButtonGroup from "./ButtonGroup.js";
import { calculateMatch } from './components/Match.jsx';
import { Match, Header} from './containers';
import { useRef } from 'react';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Collapse } from 'antd';
import './App.css';
import Card from './components/Card'
const { Panel } = Collapse;




let numFinal;
let loc;

function ThirtyMinFromNow(){
  const newDate = Date.now()
  const date = new Date(newDate)
  return (Math.floor(date.getTime()/1000) + 1800)
}

const App = () => {
  window.onload = function() {
    window.scrollTo(0, 0)
  }
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  // andrew's api functions
  const [dummy, setDummy] = useState(null)
  const [index, setIndex] = useState(0)

  //front-end to get inputs for api functions
  const [input, setInput] = React.useState('');
  const [savedInput, setSavedInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);

    //text bar, checks to see if there is change
    const handleChange = (event) => {
      setInput(event.target.value);
    }

    const onChange = (key) => {
      console.log(key);
    };
  
    //saves the change
    const handleClick = (ref) => {
    setSavedInput(input);
    loc = input;
    console.log(input);
    console.log(loc);
    }

    //the buttons for price tag
    const printButtonLabel = (event) => {
      let num = event.target.name;
      console.log(num);
      switch (num){
    case "$$$$":
      console.log("inside four");
      numFinal = 4;
        break;
    case "$$$":
      console.log("inside three");
      numFinal = 3;
        break;
    case "$$":
      console.log("inside two");
      numFinal = 2;
        break;
    default:
      console.log("else");
        numFinal = 1;
        break;
      }
      console.log("Final is:");
      console.log(numFinal);
    };

  function getRestInformation(inputLocation, inputPrice) {
    const options = {
      method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search',
      params: {
        location: inputLocation,
        // latitude: lat,
        // longitude: long,
        price: inputPrice,
        open_at: ThirtyMinFromNow(), // Date now is unix time of now, 1800 is unix for + 30 minutes
        sort_by: 'distance',
        radius: 24140,
        limit: '40' // randomize the limit that gets returned, min: 0, max: 50
      },
      headers: {
        accept: 'application/json',
        Authorization:
            'Bearer l5_sN8Upkix19lLgwHxpAMThs0G2RBKr0rNRPxJ7ZmlOFagJ9EMi_1vv9o0BJNsto0R0hU1enjBhinEDROi6zODQWf_Tdzk2Lhq47-Z1Xz8EP2EEmjws8MyqSp-LY3Yx'
      }
    };
    // Want to get name, distance, image_url, categories
    let myWork = []
    axios
        .request(options)
        .then(function (response) {

          console.log("success")
          myWork = response.data['businesses']
          setDummy(myWork)

        })
        .catch(function (error) {
          console.error(error);
        });
  }

  // this is used to ensure swipe does not call the function multiple times
  var lastClick = 0;
  var delay = 20; 

  // swiping functions
  const addition = (num) => {
    if (lastClick >= (Date.now() - delay))
      return;
    lastClick = Date.now();

    console.log('CALLED ACLLED')
    return num + 1;
  }

  const handleClick1 = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  console.log('dummy that works???', dummy);
  

  //NAOMI STUFF 
  //This will read data from the Api which should use the data file
  const [resturants, setResturants] = useState(dummy);

  //Holds the resturants in arrays based on what the user inputed?
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);
  const [superliked, setSuperliked] = useState([]);
  //This keep tracks of what user is active data. First line in data file should be user info
  //and not a resturant
  const activeUser = 0;
  console.log("liked: ", liked);
  console.log("disliked: ", disliked);
  console.log("superliked: ", superliked);

  const changeActionChoice = (id, action) => {
    //Adds to the arrays
    const newLiked = [...liked];
    const newsuperlike = [...superliked];
    const newdisliked = [...disliked];

    //Based on user input 
    switch (action){
      case 'ADD_TO_LIKED_USERS':
        if (!liked.includes(dummy[index])) {
          newLiked.push(dummy[index]);
          setLiked(newLiked);
          setIndex(index+1)
        }
        break;
      case 'ADD_TO_DISLIKED_USERS' :
        if (!disliked.includes(dummy[index])) {
          newdisliked.push(dummy[index]);
          setDisliked(newdisliked);
          setIndex(index+1)
        }
        break;
      case 'ADD_TO_SUPERLIKED_USERS':
        if (!superliked.includes(dummy[index])) {
          newsuperlike.push(dummy[index]);
          setSuperliked(newsuperlike);
          setIndex(index+1)
        }
        break;
      default:
        return resturants;
    }
  }
  const [matched, setMatched] = useState(null);
  function getMatch() {
    let match = calculateMatch(liked, disliked, superliked)
    setMatched(match);
    console.log(matched)
    return 0;
  }
  
  return (
    <div className = "App">
      <div ref={section1Ref}>
          <Header
            nextPage={ section2Ref }/>
      </div >
      <div className="choose-preference section__padding" id="home" ref={section2Ref}>
      <div className="choose-preference-content">
        <div className="choose-preference">
          <h1>How Much Are You Spending Today?</h1>
          <ButtonGroup
            buttons={["$", "$$", "$$$","$$$$"]}
            doSomethingAfterClick={printButtonLabel}/>
        <br/>
          <h2 className="header">Where Are You Heading?</h2>
            <div className="choose-preference-content__input">
              <input type="location" value={input} onChange={handleChange} placeholder="Enter Address or City" />
             <button type="button" onClick={() => {
               handleClick(section3Ref)
               getRestInformation(loc, numFinal)
               setTimeout(function() {
                window.scrollTo(0, 1800);
                }, 750);
             }}>Match Me </button>
            </div>
        </div>
      </div>
      </div>
      <div ref={section3Ref}>
      {/* <button onClick={() => setIndex(index+1)}></button> */} 
      <h1> Press The Watermelon When You're Ready For A Match!</h1>
        {dummy? <>{
            <Card 
              title = { dummy[index].name }
              imageUrl = { dummy[index].image_url }
              body = { dummy[index].location.display_address }
              categories = { dummy[index].categories }
              distance = { dummy[index].distance }
              changeActionChoice = { changeActionChoice }
              calcFunc = { calculateMatch }
              setMatched = { setMatched }
              liked = { liked }
              disliked = { disliked }
              superliked = { superliked }
              ref = { section4Ref }
              handleScroll = { handleClick}
            />
          
          // dummy.map((shop, index) => (
          //     <div key={index}>name: { shop.id }</div>
          // ))
            // dummy[`${index}`].name
        }
        </> : (
            
            <button onClick={() => {
              getRestInformation(loc, numFinal)
              handleClick(section2Ref)
            }}>Not enough information try again</button>
        )}
        
      </div>
      <div ref={section4Ref}>
          {/* <button onClick={() => setMatched(calculateMatch(liked,disliked,superliked))}>MATCH ME</button> */}
          {matched? <>{
            <div>
              <div className="message">It's a Match!
                <br />
                <h1>{matched.name}</h1>
              </div>
              <div className="match_image-container">
                  <img src={matched.image_url} alt="" width = "550" height = "400"/>;
              </div>
                 <br />
                 <br />
               {/* https://ant.design/components/collapse#collapsepanel */}
              <Collapse onChange={onChange}>
                <Panel header="Restaurant Info" key="1">
                  {matched.name}
                  <br></br>
                  {matched.location.display_address}
                  <br></br>
                  {matched.distance}
                </Panel>
              </Collapse>

        <br /><br />
            </div>
          }
          </> : (
            <button onClick={() => {
              setMatched(calculateMatch(liked,disliked,superliked))
            }}>try again</button>
          )}
      </div>
    </div>
  )
}

export default App