import React from 'react'

const SongList = ({name,image,id}) => {

    var text = name;
    var textResult = text.slice(0,15)+'...';


  return (
    <>
        <div className="box">
            <a href="">
                <img className='image' src={image} alt={image} />
                <div className="text">
                    <h3 maxlength="20">{textResult}</h3>
                </div>
            </a>
        </div>
    </>
  )
}

export default SongList