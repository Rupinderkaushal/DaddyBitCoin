import React from 'react'
import "../../Styles/Daddynav.css"
import Pic from "../../Assests/logo.png"
const Daddynav = () => {
    return (
        <div className="daddy-nav">
            <div>
                <a href="#">Chart</a>
                <a href="#">Roadmap</a>
                <a href="#">Takenomics</a>
            </div>
                 <div>
                   <a href=''>  <img src={Pic}/></a>
                 </div>
            <div>
                <a href="#">Telegram</a>
                <a href="#">Whitepaper</a>
                <button>Buy Token</button>
            </div>
        </div>
    )
}

export default Daddynav
