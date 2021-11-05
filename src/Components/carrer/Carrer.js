import React from 'react'
import "../../Styles/Carrer.css"
import Pic from "../../Assests/c.png"
import Frame from "../../Assests/Frame 4.png"
const Carrer1 = () => {
    return (
        <div className="carrers">
            <h1>Carrers</h1>
            <p>We are always looking for talented individuals who share <br/> the same vision as our team.
             Check
                 below for our latest <br/> vacancies and apply today.</p>
                 <div className="pic-div">
                     <div>
                         <img src={Pic}/>
                     </div>
                     <div className='bg-div'>
                        <div>
                            <img style={{width:"40px",height:'40px'}} src={Frame}/>
                        </div>
                        <div className="big-div-text">
                            <h1>Hamarin Developer</h1>
                            <p>$55,000 - $65,000 pa</p>
                            <p>Successful candidates will have coding experience with iOS (Cocoa, Swift,
                                 Objective C, C++, iPhone SDK), Android (Android Framework, Java, Kotlin),
                                  Mobile Web (HTML5, CSS3, JavaScript, RWD, mobile-first frontend 
                                  frameworks), Xamarin, C#/.NET, etc.</p>
                        </div>
                     </div>
                 </div>
        </div>
    )
}

export default Carrer1
