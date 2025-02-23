import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SingleItem = ({id, name, image, banner, artist, path, idPath}) => {
    return (
        <Link to={`${idPath}/${id}`} className="single-item">
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img src={image} alt={name} className='single-item__image' />
                </div>

                <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
                <div className='single-item__texts'>
                    <p className='single-item__title'>{name}</p>
                    <p className='single-item__type'>{artist ==='undefined' ? "Artista" : artist}</p>
                </div>
            </div>
        </Link>
    )
}

export default SingleItem