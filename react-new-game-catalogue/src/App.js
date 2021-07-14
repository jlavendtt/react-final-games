import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useState, useEffect, createContext} from 'react'
import SignIn from './components/SignIn'
import Profile from './components/Profile'
import Home from './components/Home'
import Game from './components/Game';
import SingleGame from './components/SingleGame';
import SingleUser from './components/SingleUser';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';
import React from 'react';

const userContext = React.createContext('token');

function App() {


  const [token, setToken] = useState(null);


  const [globalUser, setGlobalUser] = useState([])

  const [games, setGames] = useState([])

  const [users, setUsers] = useState([])

  const [searchedGames, setSearchedGames] = useState([])

  const [user, setUser] = useState(null)

  const [ratings, setRatings] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  // useEffect(() => {

  //   const getGames = async () => {

  //     const gamesFromServer = await fetchGames();
  //     setGames(gamesFromServer)
  //     const usersFromServer = await fetchUsers();
  //     setUsers(usersFromServer);
  //     const jesse = await fetchUser(1002)
  //     var today = new Date();
  //     console.log(today)
  //    setGlobalUser(jesse)
  //   }

  //   getGames()

    

  // }, [])

  const fetchUsers = async () => {
    const res = await fetch('https://localhost:44305/User')

    const data = await res.json();

    return data;
  }

  const signOut = () => {
    document.cookie += '; Max-Age=0'
    console.log('signout called')
    console.log(document.cookie)
  }



  const signOutUser = async (something) => {

    console.log("signout was clicked")

}

  const fetchGames = async () => {
    const res = await fetch('https://localhost:44305/Game',{
    headers: {
     'Authorization': `Bearer ${document.cookie}`,
    }
  })

    const data = await res.json();

    return data;
  }

  const searchForGames = (e) => {

    e.preventDefault();
    console.log("this was run right?")
     let found = games.filter((game)=> {
       if (searchTerm==="") {
         return false
       }
        if (game.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        }
     })
     setSearchedGames(found);
     setSearchTerm('');
  }

  const editGame = async (edited) => {
    const res = await fetch('https://localhost:44305/Game' ,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(edited)
    })

    const getGames = async () => {

      const gamesFromServer = await fetchGames();
      setGames(gamesFromServer)
    }

    getGames()

  }

  const editReview = async (edited) => {
    console.log(edited)
    const res = await fetch('https://localhost:44305/UserRating' ,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(edited)
    })

     await reloadUser(globalUser.id);
    
    }

    

  const selectUser = (user) => {
    setUser(user);
    setRatings(user.ratings)
  }

  const fetchGame = async (id) => {
    const res = await fetch(`https://localhost:44305/Game/${id}`)

    const data = await res.json();

    return data;
  }

  const deleteGame = async (id) => {
    await fetch(`address${id}`, {
      method: 'DELETE',
    })

    setGames(games.filter((game) => game.id!==id))
  }

  const addGame = async (game) => {
    const res = await fetch('api', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(game)
    })

    const data = res.json();

    setGames([...games,data])
  }

  const addRating = async (rating) => {
    console.log(rating)
    const res = await fetch('https://localhost:44305/UserRating', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(rating)
    });
    
    const data = await res.json();
    reloadUser(user.id)
  }

  

  const reloadUser = async (id) => {
    const res = await fetch(`https://localhost:44305/User/${id}`)

    const data = await res.json();
    setUser(data)
  }

  const addUser = async (user) => {
      const res = await fetch('https://localhost:44305/User', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    
    const updatedUsers = await fetchUsers();
    setUsers(updatedUsers);
  }

  return (
    
    <div className="App">
      <Router> 
    {/* <Route
     path='/signin'
     exact
     render={(props) => (
       <>
        <SignIn
        getToken = {getToken}/>

       </>
     )}
     /> */}
     <Route path='/register' 
        exact
        render={(props) => (
          <>
            <UserRegister
              
              
            />
          </>
        )}
      />
      <Route path='/login' 
        exact
        render={(props) => (
          <>
            <UserLogin
              setToken = {setToken}
              token = {token}
            />
          </>
        )}
      />
     {/* <Route
     path='/game/:id'
     exact
     render={(props) => (
       <>
        <SingleGame
        game={games.find(p=> {
          console.log(p.id)
          return p.id === props.match.params.id

        })} 
        hello = 'hi'
        />

       </>
     )}
     /> */}
     <Route path="/user/:id">
        <SingleUser globalUser = {globalUser}/>
     </Route>
     <Route path="/game/:id">
        <SingleGame user = {globalUser}/>
     </Route>
      <Route path='/profile' 
        exact
        render={(props) => (
          <>
            <Profile
              user = {globalUser}
              token = {token}
            />
          </>
        )}
      />
      <Route path='/home'
        exact
        render= {(props) => (
          <>
          <Home
            games = {searchedGames}
            user = {globalUser}
            onSubmit = {addRating}
            editReview = {editReview}
          />
          </>
        )}
      />
      

      <Navbar bg="dark" variant="dark"
        fixed="top">
        <Navbar.Brand>
          Logo (Picture)
        </Navbar.Brand>
        <Nav>
          
          <Nav.Link href="products"> Find Users </Nav.Link>
        </Nav>
        <Nav className = "nav-popular-spacing">
          
          <Nav.Link href="/home">Popular Games </Nav.Link>
        </Nav>
        <form className="searchSpacing"
        onSubmit={searchForGames}>
      <input className="searchWidth" value={searchTerm} onChange={event => {setSearchTerm(event.target.value)}} type="search" placeholder="Find Games" aria-label="Search"/>
      <button className="btn btn-outline-success btn-spacing" type="submit">Search</button>
    </form>
    <NavDropdown className = "nav-profile-spacing" title="User Profile">
            <NavDropdown.Item href = "/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href = "products/cofee">Recent Ratings</NavDropdown.Item>
            <NavDropdown.Item href = "products/tea">WishList</NavDropdown.Item>
            <NavDropdown.Item href = "products/tea">Started</NavDropdown.Item>
            <NavDropdown.Item href = "products/tea">Beaten</NavDropdown.Item>
            <NavDropdown.Item onClick={signOut}  >Signout</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand>
          Logo (Picture)
        </Navbar.Brand>
      </Navbar>
      
      </Router>
    </div>
    
    
  );
}

export default App;
