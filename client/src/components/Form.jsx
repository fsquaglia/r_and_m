import React, { useState } from "react";
import imgRM from "../Assets/rickandmorty01.png";
import validation from "../validation";
import { styled } from "styled-components";

//estilos css

const DivForm = styled.div`
  color: white;
  font-family: "Calibri", sans-serif;
  font-size: 1em;
  align-items: center;
`;
const Botton = styled.button`
  width: 7em;
  margin: 0.5em;
  height: 2.5em;
  background-color: #ffffff;
  border: 1px solid #ff9800;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: bold;
  &:hover {
    background-color: #ff9800;
    color: white;
  }
`;
const Input = styled.input`
  width: 20em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1px solid #ff9800;
  border-radius: 5px;
`;
export default function Form(props) {
  //estados iniciales
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  //funciones de manejo
  const handleChange = (event) => {
    const propiedad = event.target.name;
    const valor = event.target.value;
    setUserData({ ...userData, [propiedad]: valor });
    setErrors(validation({ ...userData, [propiedad]: valor }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  // return de componente principal
  return (
    <DivForm>
      <br />
      <form onSubmit={handleSubmit}>
        <img src={imgRM} alt="img rick and morty" width="500px" /> <br />
        <label htmlFor="email">Email: </label>
        <Input
          type="text"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleChange}
        />
        <p style={{ color: "#ff9800" }}>{errors.email}</p>
        <br />
        <label htmlFor="password">Password: </label>
        <Input
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p style={{ color: "#ff9800" }}>{errors.password}</p>
        <br />
        <Botton type="submit">Submit</Botton>
      </form>
    </DivForm>
  );
}
