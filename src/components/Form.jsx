import React, { useState } from "react"
import imgRM from "../Assets/rickandmorty01.png"
import validation from "../validation"

export default function Form (props){
   
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
        setErrors(validation({...userData, [propiedad]:valor}))
      };    
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)
      };

    
      // return de componente principal
    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
            <img src={imgRM} alt="img rick and morty" width="500px"/> <br />
            <label htmlFor="">Email: </label>
            <input type="text" name="email" id="" value={userData.email} onChange={handleChange}/> 
            <p style={{color:'red'}}>{errors.email}</p><br />

            <label htmlFor="">Password: </label>
            <input type="text" name="password" id="" value={userData.password} onChange={handleChange}/>
            <p style={{color:'red'}} >{errors.password}</p><br />

            <button type="submit">Submit</button>
        </form>
        </div>)
};