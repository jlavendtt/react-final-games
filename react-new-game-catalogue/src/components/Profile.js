import React from 'react'
import ProfileView from './ProfileView'
import UserRatings from './UserRatings'

const Profile = ({user}) => {
    return (
        <div>
            <br></br>
            <br></br>
            <h1>Profile</h1>
            {!user ?<h1>Sign in first!</h1> : ''}
            {user ? <h1>Welcome {user.username}!</h1> : ''}
            {user && user.ratings ? <UserRatings user = {user}>/</UserRatings> : 'err'}
            
            
        </div>
    )
}

export default Profile
