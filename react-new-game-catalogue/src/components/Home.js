import React from 'react'
import UserDisplay from './UserDisplay'
import Games from './Games'
import {useState, useEffect, createContext} from 'react'

const fetchUser = async (name) => {
    
    const parsed = JSON.parse(document.cookie);
    
    const res = await fetch(`https://localhost:44305/User/${name}`, {
        headers: {
            'Authorization': `Bearer ${parsed.token}`,
           }
    })

    const data = await res.json();
    return data;
  }


const Home = ({games, onSubmit, editReview}) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        
        const xyz = async () => {
            if (document.cookie) {
        
                const  tokenUser = JSON.parse(document.cookie)
        
                 const foundUser = await fetchUser(tokenUser.username);
                 setUser(foundUser) 
            }
         
            

        }
        xyz();

    },[])

    return (
        <>
        <br></br>
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
