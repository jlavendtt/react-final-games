import React from 'react'
import ProfileView from './ProfileView'
import UserRatings from './UserRatings'
import {useState, useEffect, createContext} from 'react'
import AddRating from './AddRating'
import UserRating from './UserRating'

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


const Profile = () => {


    const [user, setUser] = useState(null);

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
            
            {!user ?<h1>Sign in first!</h1> : ''}
            {user ? <h1 style={{textAlign: 'center'}}>Welcome {user.username}!</h1> : ''}
            
            {user && user.ratings ? <UserRatings user = {user}>/</UserRatings> : 'err'}
            
            
        </>
    )
}

export default Profile
