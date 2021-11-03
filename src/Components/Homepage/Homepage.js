import React from 'react'
import "../../Styles/Homepage.css"
import Logo2 from "../../Assests/Layer 2.png"
const Homepage = () => {
    return (
        <div className="homepage" >
            <div className='text-div'>
                <h1>Daddy Bitcoin</h1>
                <p>Introducing Daddy Bitcoin, the first automatic rebasing token that is programmed to keep
                     the chart constantly in a uptrend and also provides BTC rewards to holders!</p>
                     <div>
                         <button ><a href="">Pancake Swap</a></button>
                         <button className="btn"><a href="">Daddy Chart</a></button>
                     </div>
            </div>
            <div>
                <img src={Logo2}/>
            </div>
        </div>
    )
}

export default Homepage
