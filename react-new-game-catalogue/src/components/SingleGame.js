import React, { Component } from 'react'
import GameRatings from './GameRatings'

 class SingleGame extends Component {
   constructor(props) {
     super(props)
     this.state = {
      url : window.location.href,
      game : [],
      user : this.props.user    
     }
   }

   componentDidMount() {
    let splitUrl = this.state.url.split('/')
    let id = splitUrl[splitUrl.length-1];
    
        const fetchGame = async (id) => {
        const res = await fetch(`https://localhost:44305/Game/${id}`)
    
        const data = await res.json();
    
        return data;
      }

      const getGame = async () => {

        const gameFromServer = await fetchGame(id);
        console.log(gameFromServer)
        this.setState({
          game: gameFromServer
        })
      }
      getGame()
   }
   
  render() {

    

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
         {this.state.game ?<h1>{this.state.game.name}</h1> : ''}
         <h1>Picture of game and average score of game along with genres hopefully</h1>
         <GameRatings ratings = {this.state.game.ratings} user = {this.state.user}/>
      </div>
    )
  }
}

export default SingleGame


