import React from 'react';
import MusicItem from './MusicItem.jsx'

const MusicList = (props) => {
    let musicNodes = props.data.map((musicItem, index) => {
        return (
            <MusicItem musicItem={musicItem} key={index}  />
        )
    })

    return (
        <div className="music-list">
            {musicNodes}            
        </div>
    )
}

export default MusicList;