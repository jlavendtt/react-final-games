import React from 'react'
import UserDisplay from './UserDisplay'
import Games from './Games'

const Home = ({games, user, onSubmit, editReview}) => {
    return (
        <>
        <br></br>
        <br></br>
        
        <Games 
            games = {games}
            user = {user}
            onSubmit = {onSubmit}
            editReview = {editReview}
        />
        
        </>
    )
}

export default Home
