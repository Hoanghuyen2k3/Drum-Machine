import React from 'react';
function Volume({volume, setVolume}){
    return(
        <>
            <input onChange={(e)=>setVolume(parseFloat(e.target.value))} value ={volume} type="range" min="0" max="1" step="0.1" class="slider" id="myRange" />
        </>

    )
}
export default Volume;