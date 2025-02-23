import React from 'react'
import ItemList from './ItemList'
import Artists from '../pages/Artists'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Main = ({type}) => {
    return (
        <div className='main'>
            {type === "artists" || type==="undefined" ? <ItemList title="Artistas" items={10} itemArray={artistArray} path="/artists" idPath="/artist"/> : <></>}
           
           {type === "songs" || type==="undefined" ? <ItemList title="Musicas" items={20} itemArray={songsArray} path ="/songs" idPath="/song"/> : <></>}
           
        </div>
    )
}
export default Main