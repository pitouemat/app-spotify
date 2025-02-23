import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='header'>
              <Link to="/">
              <img src={logoSpotify} alt="Logo" />
            </Link>
            <Link to="/">
                <h2>Spotify</h2>
            </Link>
            
        </div>
    )
}

export default Header