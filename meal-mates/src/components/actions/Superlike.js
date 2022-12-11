import React from 'react'
import img from '../../assets/superlike.png'
import "../Card.css"

const Superlike = ({ userId, changeActionChoice }) => {
    return (
      <button
          className="image_btn"
          type="button"
          onClick={() => changeActionChoice(userId, 'ADD_TO_SUPERLIKED_USERS')}
      >
          <img src={ img } alt="Superlike" />
      </button>
    )
  }

export default Superlike
