import React from 'react';
function Bank({bank, setBank, power}){
    const handleClick =(e)=>{
        e.preventDefault();
        power ==="off"? setBank("drum"):(bank ==="drum" ? setBank("piano"): setBank("drum"));
      }
    return(
    <div>
        <h4>Bank</h4>
        <div className="switch">
          <button className={bank==="drum"? "on": "none"} onClick={handleClick}></button>
          <button className={bank==="piano"? "off": "none"} onClick={handleClick}></button>

        </div>
       
      </div>
    )

}
export default Bank;