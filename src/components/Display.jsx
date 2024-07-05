import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './MainPage';
import AlbumPage from './AlbumPage';
import { albumDatas } from '../assets/assets';

function Display() {
    const displayRef = useRef();
    const location = useLocation();
    
    useEffect(() => {
        const isAlbum = location.pathname.includes('album');
        const albumId = isAlbum ? parseInt(location.pathname.split('/').pop(), 10) : null;
        const bgColor = isAlbum && albumDatas[albumId] ? albumDatas[albumId].bgColor : '#420516';

        if (displayRef.current) {
            displayRef.current.style.backgroundColor = bgColor;
        }
    }, [location]);

    return (
        <div ref={displayRef}>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/album/:id' element={<AlbumPage />} />
            </Routes>
        </div>
    );
}

export default Display;
