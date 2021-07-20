import React from 'react'
import nes from '../nes.jpg'
import consoles from '../consoles.jpg'
import "./Landing.css"
import present from '../present.jpg'
import hourglass from '../hourglass.jpg'
import checkmark from '../checkmark.jpg'
const Landing = () => {
    return (
        <body>
            
           <section className="bg-dark text-light p-5 text-center">
               <div className="container">
                   <div className="d-sm-flex">
                   <div style={{width:"33%"}}>
                       <img className="img-fluid"  src={nes} alt=""/>
                       </div>
                       <div style={{width:"33%"}}>
                           <h1>Welcome to the  
                               <span className="text-warning"> Become Developer</span> 
                            </h1>
                            <p className="lead my-4">This is the first time i've ever done this currently i'm just typing
                                 is text filling. Someone recommended 
                            </p>
                            <button style={{marginRight:"200px"}} className="btn btn-primary btn-lg my-4">Register</button>
                            
                            <button style={{marginLeft:"20px"}} className="btn btn-primary btn-lg my-4">Sign in</button>
                       </div >
                       <div style={{width:"33%"}}>
                       <img className="img-fluid"  src={consoles} alt=""/>
                       
                       </div>
                       
                   </div>        
               </div>
           </section>
          
           <div class="newRow">
  <div className="newColumn bg-dark text-light p-5 text-center" style={{marginLeft:"3.0%"}} >
     <img className="img"  src={hourglass} alt=""/>
     <p className="lead my-4">Add to a list of games you have yet to beat!</p>
  </div>
  <div className="newColumn bg-dark text-light p-5 text-center">
    <img className="img"  src={present} alt=""/>
    <p className="lead my-4">Add to a list of games you have yet to beat!</p>
  </div>
  <div className="newColumn bg-dark text-light p-5 text-center">
    <img className="img"  src={checkmark} alt=""/>
    <p className="lead my-4">Add to a list of games you have yet to beat!</p>
  </div>
</div>
        </body>
    )
}

export default Landing
