import React, {useEffect} from 'react'
import Irene from '../../../assets/irene1.png'
import Ryan from '../../../assets/ryan1.png'

export default function AboutUs() {
    useEffect(() => {
        // change modal properties from here
        document.getElementById('modal').style.height = '430px'
    })
    return (
        <div>
            <p>Thank you for browsing through our website!</p>
            <p>Connect with us to see more of our works!</p>

            <div className='mini-profile-cont'>
                <div className='profie-row'>
                    <img className="profile-pic" src={Ryan.src} />
                    <p>Ryan Collicut</p>
                </div>
                <div className='profie-row'>
                    {/* <img src={} /> */}
                    <a>https://www.linkedin.com/in/rcollicutt-react-developer/</a>
                </div>
            </div>

            <div className='mini-profile-cont'>
                <div className='profie-row'>
                    <img className="profile-pic" src={Irene.src} />
                    <p>Irene Wu</p>
                </div>
                <div className='profie-row'>
                    {/* <img src={} /> */}
                    <a>https://www.linkedin.com/in/irenewuu/</a>
                </div>
            </div>
        </div>
    )
}
