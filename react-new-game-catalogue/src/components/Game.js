import React from 'react'
import {useState, useEffect} from 'react'
import MakeRating from './MakeRating'
import EditRating from './EditRating'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SingleGame from './SingleGame'




const Game = ({game, user, onSubmit, editReview}) => {
    
    const [showAdd, setShowAdd] = useState(false)


    const toggleShowAdd = () => {
        setShowAdd(!showAdd)
    }

    const hasReview = () => {
        if(!user) return false;
        for (let i = 0; i<user.ratings.length;++i) {
                if (game.id === user.ratings[i].gameId) {
                    return true;
                }
        }
        return false;
    }

    return (
        <>
        
            <Link to ={"/game/"+game.id}>{game.name}</Link>
            
            {!showAdd && user && !hasReview() ? <button onClick={toggleShowAdd}>add review</button> : ''}
           {showAdd && user && !hasReview() ?  <MakeRating 
                user = {user}
                game = {game}
                onSubmit = {onSubmit}
                toggleShowAdd = {toggleShowAdd}
            /> : ''}
            {!showAdd && user && hasReview() ? <button onClick={toggleShowAdd}>Edit review</button> : ''}
           {showAdd && user && hasReview() ?  <EditRating 
                user = {user}
                game = {game}
                editReview = {editReview}
                toggleShowAdd = {toggleShowAdd}
            /> : ''}
            <hr></hr>
            
            

           
        </>
    )
}

export default withRouter(Game);
