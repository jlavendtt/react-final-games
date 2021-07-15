import React, { Component } from 'react'
import GameRatings from './GameRatings'
import AddRating from './AddRating'



 class SingleGame extends Component {
   constructor(props) {
     super(props)
     this.state = {
      url : window.location.href,
      game : [],
      user : this.props.user,
      addRating : this.props.addRating,
      hasReview : false,    
     }
   }
   

   componentDidMount() {

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

    let splitUrl = this.state.url.split('/')
    let id = splitUrl[splitUrl.length-1];
    
        const fetchGame = async (id) => {
          const parsed = JSON.parse(document.cookie);
        const res = await fetch(`https://localhost:44305/Game/${id}`, {
          headers: {
            'Authorization': `Bearer ${parsed.token}`,
           }
        })

        
    
        const data = await res.json();
        
        return data;
      }

     

      const getGame = async () => {

        const gameFromServer = await fetchGame(id);
        const  tokenUser = JSON.parse(document.cookie)
        
        const foundUser = await fetchUser(tokenUser.username);
        
        this.setState({
          game: gameFromServer,
          user: foundUser
        })
        let gameNum = gameFromServer.id
            for (let i = 0;i<foundUser.ratings.length;++i) {
                let tempNum = this.state.user.ratings[i].gameId;
                console.log(gameNum, tempNum)
                if (gameNum==tempNum) {
                  this.setState({
                    hasReview: true
                  })
                }
            }

      }
      getGame()
      const findReview = () => {
          
        }
        //findReview()
   }

   
   
  render() {

    

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
         <p>{this.state.game ?<h1 style={{textAlign: 'center'}}>{this.state.game.name}</h1> : ''}</p>
       
         {/* <GameRatings ratings = {this.state.game.ratings} user = {this.state.user}/> */}
         {!this.state.hasReview ? <div style={{display : "flex", justifyContent: "center" }}>
           <div>
         
         <br></br>
            <img className='img'
      src={this.state.game.pic}
      alt="new"
      />
      </div>
              <AddRating
                game = {this.state.game}
                user ={this.state.user}
                addRating = {this.state.addRating}/>
         </div> : '' }
      </div> 
    )
  }
}

export default SingleGame


