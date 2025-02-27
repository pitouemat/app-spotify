import React from 'react'
import SongItem from './SongItem'

const SongList = ({songsArray}) => {
  console.log(songsArray)
  return (
    <div className='song-list'>  
      {songsArray.map((currentSongObj, index) => (
        <SongItem {...currentSongObj}key={index} index={index}/>
      ))}
    </div>
  )
}

export default SongList