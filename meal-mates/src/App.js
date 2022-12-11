import React from 'react'

import { Location, Match, Pricetag, Header} from './containers';
import { useRef } from 'react';

import './App.css';

import Card from './components/Card'

const App = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  var lastClick = 0;
  var delay = 20; 

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
          Hello
      </div>
        <Card 
            title = 'McDonalds'
            imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
            body = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in qui fuga veritatis ad laborum ipsam cum laudantium cumque provident. Libero cum error reiciendis harum doloribus, exercitationem neque minus omnis!'
            changeActionChoice = { changeActionChoice }
            additionFunc = { addition }
        />
    </div>
  )
}

export default App