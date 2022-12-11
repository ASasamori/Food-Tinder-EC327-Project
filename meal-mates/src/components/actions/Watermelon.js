import React from 'react'
import img from '../../assets/mealme.png'
import "../Card.css"

const Watermelon = ({ userId, changeActionChoice }) => {
    return (
      <button
          className="image_btn"
          type="button"
          onClick={() => changeActionChoice(userId, 'MELON')}
      >
          <img src={ img } alt="Dislike" />
      </button>
    )
  }

export default Watermelon
