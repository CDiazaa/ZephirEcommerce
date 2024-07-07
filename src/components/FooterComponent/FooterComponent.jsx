import React from 'react'
import { FaGithub } from 'react-icons/fa'

const FooterComponent = () => {
    return (
        <div className='footerContainer'>
            <a href='https://github.com/CDiazaa' target='_blank'><FaGithub className='gitIcon' /></a>
            <div className='footer'>All rights reserved © </div>
        </div>
    )
}

export default FooterComponent