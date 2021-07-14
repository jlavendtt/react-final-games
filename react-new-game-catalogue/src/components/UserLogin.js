import React from 'react'
import {useState, useEffect} from 'react'

const UserLogin = ({setToken, token}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onUserSubmit = (e) => {
        e.preventDefault();
        const toLogin = {
            Username : username,
            Password : password,
            
        }
        //toggleShowAdd()
       // onSubmit(toAdd)
        setUsername('');
        setPassword('')
        loginUser(toLogin)
        
    }

    const loginUser = async (toLogin) => {
        const res = await fetch('https://localhost:44305/Login' ,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(toLogin)
        })
    
        const data = await res.json();

        console.log(data)
        document.cookie = JSON.stringify(data)
        console.log(document.cookie)
        
        
      }

    return (
        <form className ="add-form"
        onSubmit={onUserSubmit}>
            <br></br>
            <br></br>
            <br></br>
            <div className='form-control'>
                <label>Username</label>
                <input type='text' placeholder='Enter Username'
                value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Enter Password'
                value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <input className='btn btn-block' type='submit' value='Login'></input>
        </form>
    )
}

export default UserLogin
