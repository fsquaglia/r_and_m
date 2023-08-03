import { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = useState ("")
   
   function handleChange (event) {
      setId (event.target.value)

   };
   
   function handleKeyPress (event) {
      const keyValue = event.key;
  
      // Verificar si el carácter ingresado es un número o el punto (.)
      if (!/^\d$/.test(keyValue) && keyValue !== 'Backspace') {
        event.preventDefault(); // Cancelar el evento de tecla
      }
    };
   
   function handlePaste (event) {
      event.preventDefault(); // Cancelar el evento de pegado
    };
   
   function random(min, max) {
      return Math.floor((Math.random() * (max - min + 1)) + min);
   };

   return (
      <div>
         <input 
            type='search' 
            onChange={handleChange} 
            onKeyDown={handleKeyPress}
            onPaste={handlePaste}/>
         <button onClick={()=>props.onSearch(id)}>Agregar</button>
         <button onClick={()=>props.onSearch(random(1, 826))}>Aleatorio</button>
      </div>
   );
}
