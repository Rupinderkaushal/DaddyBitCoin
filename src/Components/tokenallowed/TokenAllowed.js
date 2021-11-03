import React from 'react'
import "../../Styles/TokenAllowed.css"
import Chart from "../../Assests/chart.png";
const TokenAllowed = () => {
    return (
        <div className='token-allow'>
             <div className='token-div'>
                 <a href="">Tokens Allocation</a>
                 <p>Tokenomics</p>
             </div>
             <div className='chart-div'>
                 <div>
                     <img src={Chart}/>
                 </div>
                 <div className='token-chart'>
                     <p>1 Quadrillion:</p>
                     <div className="color-text">
                         <div className='token-div'>
                             <div className='color-div'></div>
                             <p>- 50% Burnt</p>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default TokenAllowed
