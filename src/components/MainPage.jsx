import React from 'react';
import '../assets/style.css'
import { germsData, albumDatas, songDatas } from '../assets/assets.js';
import SongList from './SongList';


const MainPage = () => {
  return (
    <div className='mainPage'>
        <h4>Germs</h4>
        <div className="mainBox">
            {germsData.map((item,index)=>(<SongList key={index} name={item.name} id={item.id} image={item.image} />))}  
        </div>
        <h4>Albums</h4>
        <div className="mainBox">
            {albumDatas.map((item,index)=>(<SongList key={index} name={item.name} id={item.id} image={item.image} />))}  
        </div>                          
        <h4>Songs</h4>
        <div className="mainBox">
            {songDatas.map((item,index)=>(<SongList key={index} name={item.name} id={item.id} image={item.image} />))}  
        </div>
    </div>
  )
}

export default MainPage