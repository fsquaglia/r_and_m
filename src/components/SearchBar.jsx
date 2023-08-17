import { useState } from "react";
import { styled } from "styled-components";


const Botton = styled.button`
  width: 7em;
  margin: 0.5em;
  height: 2.5em;
  background-color: #ffffff; 
  border: 1px solid #ff9800; 
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: bold; /* Aplica negrita al texto */
  &:hover {
    background-color: #ff9800; /* Cambio de fondo al hacer hover */
    color: white; /* Texto blanco en hover */
  }
`;

const Input = styled.input`
   width: 7em;
   margin: 0.5em;
   height: 2.5em;
   background-color: #ffffff; 
   border: 1px solid #ff9800; 
   border-radius: 5px;    

`;

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
         <Input 
            type='search' 
            onChange={handleChange} 
            onKeyDown={handleKeyPress}
            onPaste={handlePaste}/>
         <Botton onClick={()=>props.onSearch(id)}>Agregar</Botton>
         <Botton onClick={()=>props.onSearch(random(1, 826))}>Aleatorio</Botton>
      </div>
   );
}
