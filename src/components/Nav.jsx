import SearchBar from './SearchBar.jsx';
import { NavLink } from 'react-router-dom';
import { styled } from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
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


function Nav(props) {

    return (

        <NavContainer>
        <div>
            <NavLink to="/home">
                <Botton>Home</Botton>
            </NavLink>
            <NavLink to='/favorites'>
                <Botton>Favorites</Botton>
            </NavLink>
            <NavLink to="/ViewAbout">
                <Botton>About</Botton>
            </NavLink>
            <Botton onClick={props.onClick}>Logout</Botton>
        </div>
        <h2>The Rick and Morty API</h2>
           <SearchBar onSearch={props.onSearch} />
        </NavContainer>

    );
 }
 
 export default Nav;