import React from 'react'
import GameRating from './GameRating'

const gameratings = ({user, ratings}) => {
    return (
        <div>
            {user && ratings ? ratings.map((rating)=> <GameRating rating={rating} key={rating.gameId}></GameRating> ) : ''}
        </div>
    )
}

export default gameratings
