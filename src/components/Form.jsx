import React, { useState } from "react"
import imgRM from "../Assets/rickandmorty01.png"

export default function Form (){
   
    //estados iniciales
    const [userData, setUserData] = useState({
        email:'',
        password:''
    });
    
    const [errors, setErrors] = useState({});


    
    //funciones de manejo
    const handleChange = (event) => {
        const propiedad = event.target.name
        const valor = event.target.value
        setUserData({...userData, [propiedad]:valor})
        // setErrors(validate({...inputs, [propiedad]:valor}))
      };    

    return (
        <div>
            <br />
            <form action="">
            <img src={imgRM} alt="img rick and morty" width="500px"/> <br />
            <label htmlFor="">Email: </label>
            <input type="text" name="email" id="" value={userData.email} onChange={handleChange}/> <br />

            <label htmlFor="">Password: </label>
            <input type="text" name="password" id="" value={userData.password} onChange={handleChange}/><br />

            <button type="submit">Submit</button>
        </form>
        </div>)
};