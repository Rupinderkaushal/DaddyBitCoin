import React from 'react'
import "../../Styles/Navbar.css"
import Logo from "../../Assests/logo.png"
const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img src={Logo}/>
            </div>
           <div>    
           <a href="">Chart</a> 
           <a href="">Roadmap</a> 
           <a href="">Takenomics</a> 
           <a href="">Telegram</a> 
           <a href="">Whitepaper</a>
               </div> 
               <div className="buy-token">
                   <button>Buy token</button>
               </div>
        </div>
    )
}

export default Navbar
