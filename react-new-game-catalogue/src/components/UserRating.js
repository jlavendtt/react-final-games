import React from 'react'
import {Link} from 'react-router-dom'



const UserRating = ({incomingStarted, incomingRating, incomingCompleted, incomingDescription}) => {

    const [started, setStarted] = useState(false)
    const [rating, setRating] = useState(0)
    const [completed, setCompleted] = useState(false)
    const [description, setDescription] = useState('')


    return (
        <div>
            <div>
            <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
  value={started} onChange={(e) => setStarted(e.currentTarget.checked)}/>
  <label class="form-check-label" for="flexCheckDefault">
    Started
  </label>
  </div>
  
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
  value={completed} onChange={(e) => setCompleted(e.currentTarget.checked)}/>
  <label class="form-check-label" for="flexCheckDefault">
    Beaten
  </label>
  </div>
  </div>
  
        
            
            <ReactStars style={{marginLeft:"100px"}}
        count={5}
        onChange={ratingChanged}
        value = {rating}
        // edit = {false}
        size={24}
        color2={'#ffd700'} />
        
                
                <input type='text' style={{height:"200px",width: "500px"}} placeholder='Write Review Here'
                value={description} onChange={event => {setDescription(event.target.value)}}/>
                <button onClick={onUserSubmit} style={{display: 'block'}}>Post</button>
                
            



             
        </div>
    )
}

export default UserRating
