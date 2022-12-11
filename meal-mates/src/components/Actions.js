import React from 'react';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';
import Watermelon from './actions/Watermelon';
import './Card.css'

const Actions = ({ person, changeActionChoice }) => {
  return (
    <div className="btn">
        <Watermelon/>
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
