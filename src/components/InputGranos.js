import React, { useState } from 'react';


function InputGranos(props) {

    const [granoIngresado, setGranoIngresado]= useState({titulo:"",nombreGrano:"", cantidadGrano:0, nombreLupulo:"",cantidadLupulo:0, originalBatchSize:Number, newBatchSize:Number})

  const[hayTitulo,setHayTitulo]=useState(false)
  const[hayVolumen,setHayVolumen]=useState(false)
  const[batchSizeInputStyle, setBatchSizeInputStyle]= useState({display:"none"})
  
 
function handleChange(event) {
    const value = event.target.value
    const name = event.target.name
    
      setGranoIngresado(prevVal=>{return {...prevVal,[name]:value}})        
    
}

function submitear(event) {
  
  props.newGrain(granoIngresado)

    event.preventDefault();
    
   
      setGranoIngresado({titulo:"",nombreGrano:"", cantidadGrano:0,nombreLupulo:"",cantidadLupulo:0})
      if (granoIngresado.titulo !==""){setHayTitulo(true)}
     if(granoIngresado.originalBatchSize !==0){setHayVolumen(true)}
       if(granoIngresado.newBatchSize !==0){setBatchSizeInputStyle({display:"block"})}  
       
      
}

  return (
    <div > 
    
     <form  >
      {hayTitulo ? null : <><label  for="titulo">Titulo:</label>
   <input value={granoIngresado.titulo} name="titulo" type="text" onChange={handleChange}/> </>}

    {hayVolumen ? <div style={batchSizeInputStyle}><label for="newBatchSize">New batch size:</label>
   <input value={granoIngresado.newBatchSize} name="newBatchSize" type="number" onChange={handleChange}/><span>gal</span></div> :<div><label for="originalBatchSize">Original batch size:</label>
   <input value={granoIngresado.originalBatchSize} name="originalBatchSize" type="number" onChange={handleChange}/><span>gal</span></div>}

  <label for="grano">Grano:</label>
   <input value={granoIngresado.nombreGrano} name="nombreGrano" type="text" onChange={handleChange}/>
   <label for="granoCantidad">Cantidad:</label>
   <input value={granoIngresado.cantidadGrano} name="cantidadGrano" type="number" onChange={handleChange}/>
   <label for="lupulo">Lupulo:</label>
   <input value={granoIngresado.nombreLupulo} name="nombreLupulo" type="text" onChange={handleChange}/>
   <label for="lupuloCantidad">Cantidad lupulo:</label>
   <input value={granoIngresado.cantidadLupulo} name="cantidadLupulo" type="number" onChange={handleChange}/>
   <button onClick={submitear} type="submit">Calcular</button>
  </form>
    </div>
  );
}


export default InputGranos;
