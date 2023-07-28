import { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = useState ("")
   
   function handleChange (event) {
      setId (event.target.value)
      console.log(event.target.value)
   };
   
   let funcion = props.onSearch
   
   function random(min, max) {
      return Math.floor((Math.random() * (max - min + 1)) + min);
   };

   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick={()=>funcion(id)}>Agregar</button>
         <button onClick={()=>funcion(random(1, 826))}>Aleatorio</button>
      </div>
   );
}
