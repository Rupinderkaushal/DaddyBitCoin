import React from 'react'
import "../../Styles/TokenAllowed.css"
import Chart from "../../Assests/chart.png"
const TokenAllowed = () => {
    return (
       <div className='main-token-div'>
            <div className='token-allowed'>
            <div className='chart-div'>
                <img
                src={Chart}
                />
            </div>
            <div className="chart-text">
                <div>
                    <label style={{margin:'10px',border:'solid blue'}}>1 Quadrillion:</label>
                    <div style={{border:'solid green',display:'flex',justifyContent:"space-between"}}>
                       <div>
                       <div className='color-container'>
                            <div className='color-div'></div>
                            <label>- 50% burnt</label>
                        </div>
                        <div className='color-container'>
                            <div className='color-div'></div>
                            <label>- 50% burnt</label>
                        </div>
                       </div>
                       <div>
                       <div className='color-container'>
                            <div className='color-div'></div>
                            <label>- 50% burnt</label>
                        </div>
                        <div className='color-container'>
                            <div className='color-div'></div>
                            <label>- 50% burnt</label>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default TokenAllowed
