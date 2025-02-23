import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams} from 'react-router-dom'
import SongList from '../componests/SongList'
import {artistArray} from '../assets/database/artists'
import {songsArray} from '../assets/database/songs'

const Artist = () => {
  const {id} = useParams()
  console.log(id) 


  const artistObj = artistArray.filter((currenteArtistObj) => currenteArtistObj.id === Number(id))[0]
  const songArrayFromArtist = songsArray.filter((currenteSongObj) => currenteSongObj.id === artistArray.name)[0]

  
  const randomIndex = Math.floor(Math.random() * (songArrayFromArtist.length -1))
  const randomIdFromArtist = songArrayFromArtist[randomIndex].id
  console.log(artistObj)
  return (
  
    <div className='artist'>
      <div className="artist__header" style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})` }}>
      <h2 className='artist__title'>{artistObj.name}</h2>
      </div>
      <div className="artist__body">
      <h2>Populares</h2>  
        <SongList artistName = {artistObj.name}/>
      </div>
      <Link to='/songs/1'>
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>

    </div>
  )
}

export default Artist