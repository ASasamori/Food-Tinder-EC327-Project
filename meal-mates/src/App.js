import React from 'react'

import { Location, Match, Pricetag, Header} from './containers';
import { useRef } from 'react';

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

export default App