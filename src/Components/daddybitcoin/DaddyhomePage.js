import React from 'react'
import "../../Styles/DaddyhomePage.css"
import Img from "../../Assests/man.png"
const DaddyhomePage = () => {
    return (
       <>
        <div className="Daddy-homepage" >
           <a href=""> <img src={Img}/></a>
              <div className="daddy-bitcoin">
              <h1>daddy bitcoin</h1>
              <p>Introducing Daddy Bitcoin, the first automatic rebasing token that is programmed to keep
                   the chart constantly in a uptrend and also provides BTC rewards to holders!</p>
                   <div className="btn-div">
                       <button><a href="">Pancke Swap</a></button>
                       <button id="btn"><a href="">Daddy Chart</a></button>
                   </div>
              </div>
        </div>
        <div className='what-is'>
           <div className="text-container">
               <h1>
               What is <br/> Daddy Bitcoin?
               </h1>
               <p>
               Daddy Bitcoin is an increase or decrease in the total supply of a <br/> given token across all
                holding pools and all wallets. This is done in <br/> order to adjust the token price, without 
                affecting the value of <br/> anyone’s share of coins.
               </p>
           </div>
           <div className='para-div'>
               <p>
               This can be beneficial as the chart will always look healthy <br/> regardless of dips and we can be
                on the top gainers parts of <br/> websites due to the illusion of a rise in price floor so is a <br/>
                 brilliant marketing tool in itself.
               </p>
           </div>
        </div>
       </>
    )
}

export default DaddyhomePage
