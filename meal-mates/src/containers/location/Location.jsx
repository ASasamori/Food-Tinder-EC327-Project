import React from 'react'
import './location.css'
const Location = () => {
  return (
    <div className="mealmate__location section__padding" id="home">
    <div className="mealmate__location-content">
      <h1 className="header">MealMe Location </h1>
        <p>Please enter in your address or city</p>

      <div className="mealmate__location-content__input">
        <input type="location" placeholder="Address or City" />
        <button type="button">Match Me</button>
      </div> 
    </div>
   

    {/* <div className="bottom_spacer" /> */}
  </div>
  
  )
}

export default Location