import React from 'react';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';
import Watermelon from './actions/Watermelon';
import './Card.css'

const Actions = ({ person, changeActionChoice, calcMatch, liked, disliked, superliked, setMatched, ref, handleScroll }) => {
  return (
    <div className="btn">
        <Watermelon
          calcMatch = { calcMatch }
          liked = { liked }
          disliked = { disliked }
          superliked = { superliked }
          setMatched = { setMatched }
          ref = { ref }
          handleScroll = { handleScroll }
        />
        <Dislike
            userId={person.id}
            changeActionChoice={changeActionChoice}
        />
        <Like
            userId={person.id}
            changeActionChoice={changeActionChoice}
        />
        <Superlike
            userId={person.id}
            changeActionChoice={changeActionChoice}
        />
    </div>
  )
}

export default Actions
