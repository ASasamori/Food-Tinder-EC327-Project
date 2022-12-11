import React from 'react'

import { Location, Match, Pricetag, Header} from './containers';
import { useRef } from 'react';
import {useEffect, useState} from "react";
import axios from 'axios';

import './App.css';

import Card from './components/Card'

function ThirtyMinFromNow(){
  const newDate = Date.now()
  const date = new Date(newDate)
  return (Math.floor(date.getTime()/1000) + 1800)
}

const App = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  // andrew's api functions
  const [dummy, setDummy] = useState(null)
  const [index, setIndex] = useState(0)

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
        radius: 8047,
        limit: '20' // randomize the limit that gets returned, min: 0, max: 50
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
  const changeActionChoice = (userId, action) => {
    switch (action) {
      default:
        console.log('change log')
        return 0;
    }
  }

  const addition = (num) => {
    if (lastClick >= (Date.now() - delay))
      return;
    lastClick = Date.now();

    console.log('CALLED ACLLED')
    return num + 1;
  }

  const handleClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  console.log('dummy that works???', dummy)
  
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
      <div ref={section6Ref}>
      <button onClick={() => setIndex(index+1)}></button>
        {dummy? <>{
          <Card 
            title = { dummy[index].name }
            imageUrl = { dummy[index].image_url }
            body = { dummy[index].location.display_address }
            changeActionChoice = { changeActionChoice }
            additionFunc = { addition }
          />
          // dummy.map((shop, index) => (
          //     <div key={index}>name: { shop.id }</div>
          // ))
            // dummy[`${index}`].name
        }
        </> : (
            <button onClick={getRestInformation('610 Beacon Street',[1,2,3,4])}>getinformation</button>
        )}
        
      </div>
    </div>
  )
}

export default App