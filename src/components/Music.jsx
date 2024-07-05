import React, { useRef } from 'react';

const Music = () => {
    const playButton = useRef(null);
    const pauseButton = useRef(null);

    // Function to handle click on the play/pause buttons
    function ClickPlay() {
        playButton.current.classList.toggle('active');    // Toggle active class on play button
        pauseButton.current.classList.toggle('active');   // Toggle active class on pause button
    }

    return (
        <div className='player'>
            {/* Song name */}
            <h1>Beast and the Harlot</h1>
            {/* img */}
            <img src="https://i.pinimg.com/236x/8e/5f/b6/8e5fb6355a5dcb37a56adb6b7787e0c6.jpg" alt="" />
            {/* icons like pause play skip */}
            <div className="buttons">
                <i className="fa-solid fa-lg fa-forward"></i> {/* Forward icon */}
                {/* Play button */}
                <i ref={playButton} onClick={ClickPlay} className="fa-solid fa-lg fa-play play"></i>
                {/* Pause button */}
                <i ref={pauseButton} onClick={ClickPlay} className="fa-solid fa-lg fa-pause pause"></i>
                <i className="fa-solid fa-lg fa-backward"></i> {/* Backward icon */}
            </div>
            {/* seekbar */}
            <div className="seekbar">
                <div className="wrapper">
                    <div className="inner">
                        <div className="progressBar">
                            <div className="moveMe"></div> {/* Progress bar */}
                        </div>
                    </div>
                </div>
            </div>
            {/* duration */}
            <div className="duration">
                <h4>00:00</h4> {/* Current time */}
                <h4>10:99</h4> {/* Total duration */}
            </div>
            {/* artist name */}
            <h3>Avenged Sevenfold</h3>
            {/* album name */}
            <h2>City of Evil</h2>
            <hr className='custom-hr' />
            {/* song list */}
            <div className="albumLists">
                <ul>
                    <li><a href=""><h3>1. Beast and the Harlot</h3></a></li>
                    <li><a href=""><h3>2. Another Song</h3></a></li>
                    {/* Add more songs as needed */}
                </ul>
            </div>
        </div>
    );
}

export default Music;
