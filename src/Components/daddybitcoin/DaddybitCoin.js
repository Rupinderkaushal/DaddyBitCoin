import React from 'react'
import "../../Styles/DaddybitCoin.css"
import HowtoBuy from '../howtobuy/HowtoBuy'
import TokenAllowed from '../tokenallowed/TokenAllowed'
import DaddyhomePage from './DaddyhomePage'
import Daddynav from './Daddynav'
const DaddybitCoin = () => {
    return (
        <div className="daddy-bit-coin">
            <Daddynav/>
            <DaddyhomePage/>
             {/* <TokenAllowed/> */}
             <HowtoBuy/>
        </div>
    )
}

export default DaddybitCoin
