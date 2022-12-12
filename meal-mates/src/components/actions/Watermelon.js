import React from 'react'
import img from '../../assets/mealme.png'
import "../Card.css"

const Watermelon = ({ userId, calcMatch, liked, disliked, superliked, setMatched}) => {
    return (
      <button
          className="image_btn"
          type="button"
          onClick={() => {
            setMatched(calcMatch(liked, disliked, superliked))
            setTimeout(function() {
              window.scrollTo(0, 3000);
            }, 250);
          }}
      >
          <img src={ img } alt="Watermelon" />
      </button>
    )
  }

export default Watermelon
