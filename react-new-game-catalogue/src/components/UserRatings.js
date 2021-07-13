import React from 'react'
import UserRating from './UserRating'

const UserRatings = ({user}) => {
    return (
        <div>
            {user && user.ratings ? user.ratings.map((rating)=> <UserRating rating={rating} key={rating.gameId}></UserRating> ) : ''}
        </div>
    )
}

export default UserRatings
