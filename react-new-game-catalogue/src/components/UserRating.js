import React from 'react'
import {Link} from 'react-router-dom'

const UserRating = ({rating}) => {
    return (
        <div>
            
            {rating ? 
                <>
                <h1>Rating Score</h1> 
                <Link to ={"/game/"+rating.ratedGame.id}>{rating.ratedGame.name}</Link>
                <h1>Picture</h1>
                <h1>Checkmarks and other stuff indicating completion</h1>
                </> : 'err'}
        </div>
    )
}

export default UserRating
