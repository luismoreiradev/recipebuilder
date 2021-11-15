import React, { useState } from 'react';
import InputGranos from '../components/InputGranos';
import Granos from '../components/Granos';


function Calculador() {

  const [allGrains, setAllGrains]=useState([])
  

  function newGrain(granoIngresado){
setAllGrains(prevVal=>{return [...prevVal,granoIngresado]})  
  }

 

  return (    
    <div>
    <h1>Brewery Calculator</h1>
  <InputGranos newGrain={newGrain}/>
   <Granos allGrains={allGrains}  />
    </div>
  );
}

export default Calculador;
