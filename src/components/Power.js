import React from 'react';
function Power({power, setPower}){
    const handlePower =(e)=>{
        e.preventDefault();
        power ==="on"? setPower("off") : setPower("on");
        
      }
    return(
        <div>
            <h4>Power</h4>
            <div className="switch">
              <button className={power==="on"? "on": "none"} onClick={handlePower}></button>
              <button className={power==="off"? "off": "none"} onClick={handlePower}></button>

            </div>
      </div>
    )
}
export default Power;