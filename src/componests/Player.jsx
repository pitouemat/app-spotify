import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Player = () => {
    return (
        <div className='player'>
            <div className="player__controllers">
                <Link to="/song/1">
                    <FontAwesomeIcon className="player__icon " icon={faBackwardStep} />
                </Link>
                <FontAwesomeIcon className="player__icon player__icon--play " icon={faCirclePlay} />
                <Link to="/song/3">
                    <FontAwesomeIcon className="player__icon " icon={faForwardStep} />
                </Link>
            </div>
            <div className="player__progress">
                <p>00:00</p>
                <div className="player__bar">

                </div>
                <p>02:00</p>
            </div>
        </div>
    )
}

export default Player