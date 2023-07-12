import React from 'react';
function Button({song, music, setClick, power}){
    const handlePlayAudio = (click) => {
        const audio = new Audio(click.url);
        audio.volume = parseFloat(click.volume);
        audio.play();
      };
    const handleClick =(e)=>{
        e.preventDefault();
        setClick(song);
        power ==="on" &&handlePlayAudio(music);
    }
    return(
        <button onClick={handleClick} key={song.keyCode}>{song.keyTrigger}</button>
    )
}
export default Button;