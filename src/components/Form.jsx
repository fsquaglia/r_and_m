import React, { useState } from "react"
import imgRM from "../Assets/rickandmorty01.png"

export default function Form (){
    //estados iniciales
    const [userData, setUserData] = useState({
        email:'',
        password:''
    });



    return (
        <div>
            <br />
            <form action="">
            <img src={imgRM} alt="img rick and morty" width="500px"/> <br />
            <label htmlFor="">Email: </label>
            <input type="text" name="email" id="" /> <br />

            <label htmlFor="">Password: </label>
            <input type="text" name="email" id="" /><br />

            <button type="submit">Submit</button>
        </form>
        </div>)
};