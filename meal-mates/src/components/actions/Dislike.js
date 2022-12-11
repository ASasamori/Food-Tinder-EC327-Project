import React from 'react'
import img from '../../assets/dislike.png'
import "../Card.css"

const Dislike = ({ userId, changeActionChoice }) => {
    return (
      <button
          className="image_btn"
          type="button"
          onClick={() => changeActionChoice(userId, 'ADD_TO_DISLIKED_USERS')}
      >
          <img src={ img } alt="Dislike" />
      </button>
    )
  }

export default Dislike
