import React from 'react'
import './location.css'
const Location = () => {
  return (
    <div className="mealmate__location section__padding" id="home">
    <div className="mealmate__location-content">
      <h1 className="gradient__text">MealMate </h1>

      <div className="mealmate__location-content__input">
        <input type="location" placeholder="Your City" />
        <button type="button">Match Me</button>
      </div> 
    </div>

  </div>
  )
}

export default Location