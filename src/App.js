import './App.scss';
import React, {useState, useEffect} from 'react';
import Button from './components/Button';
import {drum, piano} from './components/Sound';
import Bank from './components/Bank';
import Volume from './components/Volume';
import Power from './components/Power';
import FallingBalloon from './components/FallingBalloon';
function App() {
  const [click, setClick]=useState({});
  const [bank, setBank]=useState("drum");
  const [power, setPower]=useState("on");
  const [volume, setVolume]=useState(0.5);
  const [music, setMusic] =useState({});
  useEffect(()=> {
    click && setMusic({...click, volume: volume});
    power ==="off" && setMusic({});
    }, [click, volume, power]);
  
 
  console.log(power);
  return (
    <div className="container">
      <FallingBalloon />
      <h1 className="title">playing music ...!</h1>
      <p className="title name">by Thi Huyen Hoang</p>
    <div className="App">
      <div className="keyboard" >
        {
          bank ==="drum" ? (
            drum.map((e)=>{
              return(
                <Button song ={e} music={music} setClick={setClick} power={power} volume={volume}/>
              )
            })
          )
          :
          piano.map((e)=>{
            return(
              <Button song ={e} music={music} setClick={setClick} power={power} volume={volume}/>
            )
          })

        }

      </div>
      <Power power ={power} setMusic={setMusic} setPower={setPower} />
      <h3>{music && music.id}</h3>
      <Volume volume={volume} setVolume={setVolume} />
      <Bank bank={bank} setBank={setBank} power={power} />

      
      
      
      
    </div>
    </div>
  );
}

export default App;
