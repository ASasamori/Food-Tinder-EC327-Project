import React from 'react'

import { Location, Match} from './containers';

import './App.css';

const App = () => {
  return (
    <div className = "App">
        <div style={{height: '100vh'}}>
          <Location />
          <Match />
      </div>
    </div>
  )
}

export default App