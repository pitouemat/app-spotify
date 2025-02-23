import React from 'react'
import Player from '../componests/Player'
import { Link } from 'react-router-dom'

const Song = () => {
  return (
    <div className='song'>

      <div className="song__container">
        <div className="song__image-container">
            <img src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="" />
        </div>
      </div>

      <div className="song__bar">
          <div className='song__artist-image'>

          <Link to="/artist/1">
            <img src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt=""width={75} />
          </Link>
          </div>
           <Player/> 
          <div>
            <p className='song__name'>Bobeiras</p>
            <p>Gordao</p>
          </div>
          
      </div>
    </div>
  )
}

export default Song