import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { styled } from "styled-components";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #3c3e44;
  padding: 10px;
  border-radius: 10px;
  font-family: "Calibri", sans-serif;
  color: white;
  font-size: 0.8em;
  width: 700px;
  margin: 0 auto;
  margin: 20px auto 0;
`;

const StyledImage = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 20px; /* Espacio entre la imagen y el texto */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    if (id <= 826) {
      //antigua https://rickandmortyapi.com/api/character/${id}
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      );
      return setCharacter({});
    }
  }, [id]);

  if (!character.name) {
    return (
      <div>
        <h2 style={{ color: "white" }}>Loading....</h2>
      </div>
    );
  }

  return (
    <CardContainer>
      <StyledImage src={character.image} alt="" />
      <TextContainer>
        <h2>Details - Name: {character.id + " - " + character.name}</h2>
        <h2>Status: {character.status}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin.name}</h2>
      </TextContainer>
    </CardContainer>
  );
}

export default Detail;
