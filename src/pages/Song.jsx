import React from 'react'
import Player from '../componests/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs';
import { artistArray } from '../assets/database/artists';

const Song = () => {
  const { id } = useParams();

  const { image, duration, name, artist, audio, index } = songsArray.filter((currentSongObj) => currentSongObj.id === Number(id))[0]
  const artistId = artistArray.filter((currenteArtistObj) => currenteArtistObj.name === artist)[0].id
  const artistImage = artistArray.filter((currenteArtistObj) => currenteArtistObj.name === artist)[0].image

  const songArrayFromArtist = songsArray.filter((currenteSongObj) => currenteSongObj.artist === artist);
  const randomIndex = Math.floor(Math.random() * (songArrayFromArtist.length - 1))
  const randomIdFromArtist = songArrayFromArtist[randomIndex].id

  return (
    <div className='song'>

      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="song__bar">
        <div className='song__artist-image'>

          <Link to={`/artist/${artistId}`}>
            <img src={artistImage} alt="" width={75} />
          </Link>
        </div>
        <Player audio={audio} duration={duration} randomIdFromArtist = {randomIdFromArtist} />
        <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>

      </div>
    </div>
  )
}

export default Song