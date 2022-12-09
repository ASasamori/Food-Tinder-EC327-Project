import React from 'react'
import './location.css'
const Location = ({ nextPage }) => {

  const [input, setInput] = React.useState('');
  const [savedInput, setSavedInput] = React.useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleClick = (ref) => {
    setSavedInput(input);
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className="mealmate__location section__padding" id="home">
    <div className="mealmate__location-content">
      <h1 className="header">MealMe Location </h1>
        <p>Please enter in your address or city</p>

      <div className="mealmate__location-content__input">
        <input type="location" value={input} onChange={handleChange} placeholder="Address or City" />
        <button type="button" onClick={() => handleClick(nextPage)}>Match Me</button>
      </div> 
    </div>
   

    {/* <div className="bottom_spacer" /> */}
  </div>
  
  )
}

export default Location