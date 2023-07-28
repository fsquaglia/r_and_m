import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';


function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            console.error()
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   //mi codigo anterior
   // function onSearch (id) {
   //    const example = {
   //       id: 1,
   //       name: 'Rick Sanchez' + id,
   //       status: 'Alive',
   //       species: 'Human',
   //       gender: 'Male',
   //       origin: {
   //          name: 'Earth (C-137)',
   //          url: 'https://rickandmortyapi.com/api/location/1',
   //       },
   //       image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   //    };
   //    const nuevoArray = [...characters, example]
   //     setCharacters(nuevoArray)
   // };

   function onClose (id) {
      
   };


   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} />

      </div>
   );
}

export default App;
