import React from 'react'
import { useParams } from 'react-router-dom';
import { albumDatas, songDatas } from '../assets/assets';

const AlbumPage = () => {

    const {id} = useParams();
    
  return (
    <>
        <div>Album ID: {id}</div>
    </>
  )
}

export default AlbumPage