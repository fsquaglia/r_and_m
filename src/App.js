import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import ViewAbout from './components/ViewAbout';
import Detail from './components/Detail';
import Error from './components/Error';
import Home from "./components/Home";
import Form from './components/Form';


function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      if (cardDisplay(id)) {
         window.alert("Card ya mostrada: " + id)
      }else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {

            window.alert('¡No hay personajes con este ID!');
         }
      })}
   };

   function cardDisplay (identificador) {
      //devuelve true or false si el personaje esta mostrado en pantalla
      let result =false;
      for (let index = 0; index < characters.length; index++) {
         if (characters[index].id === Number(identificador)) result = true;
      }
      return result;
   };


   function onClose (id) {
      const arrayFilter = characters.filter (person => person.id !== Number(id))
      setCharacters(arrayFilter)
   };

   const locationBarra = (useLocation().pathname === '/') ? true : false
   
   return (
      <div className='App'>
         

         <div hidden={locationBarra}>
            <Nav onSearch={onSearch}/>
         </div>
         <Routes>
            <Route path="/home" element={<Home characters={characters} onClose={onClose} />} />
            <Route path="/viewAbout" element={<ViewAbout/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={<Error />} />
            <Route path='/' element={<Form/>}/>
         </Routes>

      </div>
   );
}

export default App;
