import { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = useState ("")
   
   function handleChange (event) {
      setId (event.target.value)
      console.log(event.target.value)
   };
   
   let funcion = props.onSearch
   
   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick={()=>funcion(id)}>Agregar</button>
      </div>
   );
}
