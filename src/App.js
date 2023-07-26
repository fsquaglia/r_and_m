import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';


function App() {

   const [characters, setCharacters] = useState([]);


   function onSearch () {
      const example = {
         id: 1,
         name: 'Rick Sanchez',
         status: 'Alive',
         species: 'Human',
         gender: 'Male',
         origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
         },
         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      };
      const nuevoArray = [...characters, example]
      
      setCharacters(nuevoArray)
   };


   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} />

      </div>
   );
}

export default App;
