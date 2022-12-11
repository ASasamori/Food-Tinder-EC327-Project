import React from 'react'
import img from '../../assets/like.png'
import "../Card.css"

const Like = ({ userId, changeActionChoice }) => {
  return (
    <button 
        className="image_btn"
        type="button"
        onClick={() => changeActionChoice(userId, 'ADD_TO_LIKED_USERS')}
    >
        <img src={ img } alt="Like" />
    </button>
  )
}

export default Like
