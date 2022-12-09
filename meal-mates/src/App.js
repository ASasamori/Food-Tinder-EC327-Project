import React from 'react'

import { Location, Match} from './containers';
import { useRef } from 'react';

import './App.css';

const App = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  
  return (
    <div className = "App">
      <div ref={section1Ref}>
          <Location
            nextPage={ section2Ref }/>
      </div>
      <div ref={section2Ref}>
          <Match />
      </div>

    </div>
  )
}

export default App