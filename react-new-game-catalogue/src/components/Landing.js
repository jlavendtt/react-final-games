import React from 'react'
import nes from '../nes.jpg'
import consoles from '../consoles.jpg'
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
                                 as much as I can to fill out the space and see what it looks like when there
                                 is text filling. Someone recommended lorumn ipsum but my wpm is 100 and I don't care.
                            </p>
                            <button className="btn btn-primary btn-lg">Regiser</button>
                            
                            <button className="btn btn-primary btn-lg">Sign in</button>
                       </div >
                       <div style={{width:"33%"}}>
                       <img className="img-fluid"  src={consoles} alt=""/>
                       
                       </div>
                       
                   </div>        
               </div>
           </section>
        </body>
    )
}

export default Landing
