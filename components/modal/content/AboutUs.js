import React, {useEffect} from 'react'
import Irene from '../../../assets/irene1.png'
import Ryan from '../../../assets/ryan1.png'
import Github from '../../../assets/github.svg'
import Linkedin from '../../../assets/linkedin.svg'
import Link from 'next/link'

export default function AboutUs() {
    useEffect(() => {
        // change modal properties from here
        document.getElementById('modal').style.height = '475px'
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
                <p className='uppercased role'>Full-stack Developer</p>
                <div className='profie-row'>
                    <img className='social-icon' src={Linkedin.src} />
                    <a href="https://www.linkedin.com/in/rcollicutt-react-developer/" target="_blank">rcollicutt-react-developer</a>
                </div>
                <div className='profie-row'>
                    <img className='social-icon' src={Github.src} />
                    <a href="https://github.com/RyanColl" target="_blank">RyanColl</a>
                </div>
            </div>

            <div className='mini-profile-cont'>
                <div className='profie-row'>
                    <img className="profile-pic" src={Irene.src} />
                    <p>Irene Wu</p>
                </div>
                <p className='uppercased role'>UX/UI Designer & Front-end Developer</p>
                <div className='profie-row'>
                    <img className='social-icon' src={Linkedin.src} />
                    <a href="https://www.linkedin.com/in/irenewuu/" target="_blank">irenewuu</a>
                </div>
                <div className='profie-row'>
                    <img className='social-icon' src={Github.src} />
                    <a href="https://github.com/irenewuu" target="_blank">irenewuu</a>
                </div>
            </div>
        </div>
    )
}
