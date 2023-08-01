import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";




function Detail () {
    const {id} = useParams();
    const [character, setCharacter] = useState ({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


     if (!character.name ) {
        return <div>No data available.</div>;
        }

    return (
        <div>
         <hr />


        <h2>Details - Name: {character.id + " - " + character.name}</h2>
        <h2>Satus: {character.status}</h2>
        <h2>Specie: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin.name}</h2>
        <img src={character.image} alt='' />
        <hr />            
        </div>
    )
};

export default Detail;
