import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import ViewAbout from './components/ViewAbout';
import Detail from './components/Detail';


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


   return (
      <div className='App'>

         <Nav onSearch={onSearch}/>

         <Routes>
            <Route path="/" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/viewAbout" element={<ViewAbout/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>

      </div>
   );
}

export default App;
