import React from 'react'
import "../../Styles/HowtoBuy.css"
import Buy from "../../Assests/buy.png";
import Download from "../../Assests/download.png";
import Flower from "../../Assests/flower.png";
import Bucket from "../../Assests/bucket.png";
import Bitcoin from "../../Assests/bitcoin.png";
import Mask from "../../Assests/mask.png";

const HowtoBuy = () => {
    return (
        <div className='container'>
            <h1>How To Buy?</h1>
            <div className='main-div'>
                <div>
                    <img src={Buy}/>
                </div>
                <div >
                   <div className="download" >
                       <div>
                           <img src={Download}/>
                       </div>
                       <div className="text-div">
                           <p style={{marginBottom:"10px",fontWeight:"bolder"}}>Download MetaMask</p>
                           <p>MetaMask allows you to set up a Binance Smart Chain (BEP-20) Wallet, you can
                                download MetaMask as either a Web browser extension or Mobile App for
                                 free!</p>
                       </div>
                   </div>
                   <div className="download" >
                       <div>
                           <img src={Flower}/>
                       </div>
                       <div className="text-div">
                           <p style={{marginBottom:"10px",fontWeight:"bolder"}}>Setup your MetaMask Wallet</p>
                           <p>Setup your account & add the Binance Smart Chain to your network list.</p>
                       </div>
                   </div>
                   <div className="download" >
                       <div>
                           <img src={Bucket}/>
                       </div>
                       <div className="text-div">
                           <p style={{marginBottom:"10px",fontWeight:"bolder"}}>Buy $BNB</p>
                           <p>Use Binance or another exchange to buy $BNB and send it to your MetaMask
                                Wallet Address.</p>
                       </div>
                   </div>
                   <div className="download" >
                       <div>
                           <img src={Bitcoin}/>
                       </div>
                       <div className="text-div">
                           <p style={{marginBottom:"10px",fontWeight:"bolder"}}>Buy Daddy Bitcoin</p>
                           <p>Head over to PancakeSwap Exchange, connect your MetaMask wallet. Head to
                                the exchange page & input the Daddy Bitcoin contract address, set slippage
                                 to 20% and swap your $BNB for Daddy Bitcoin</p>
                       </div>
                   </div>
                </div>
            </div>
            <h1>Mentioned on</h1>
            <img style={{marginLeft:'500px'}}  src={Mask}/>
        </div>
    )
}

export default HowtoBuy
