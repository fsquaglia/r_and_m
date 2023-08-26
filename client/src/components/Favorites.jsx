import { connect } from "react-redux";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { filterCard, orderCards } from "../redux/actions";
import { useState } from "react";
import { styled } from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-around; 
  margin:0px -10px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  background-color: #272b33;
`;
const TituloH2 = styled.h2`
  color: white;
  font-family: 'Calibri', sans-serif; 
  /* font-size: 1em;  */
  align-items: center;
`;
const Seleccion = styled.select`
   width: 12em;
   margin: 0.5em;
   height: 2.2em;
   background-color: #ffffff; 
   border: 1px solid #ff9800; 
   border-radius: 5px;    
`;

function Favorites (props) {
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        aux ? setAux(false) : setAux (true);    
    };

    const handleFilter = (e) => {
        dispatch(filterCard(e.target.value))
    };

    return (
        <div>
        
        <TituloH2>My Favorites</TituloH2>
        <Seleccion name="ordenar" id="ordenar" onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </Seleccion>
        <Seleccion name="gender" id="gender" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </Seleccion>

        <NavContainer>
    {props.myFavorites.map ((elem, item  ) => {
       return <Card 
       key={item}
       id={elem.id}
       name={elem.name}
       status={elem.status} 
       species={elem.species}
       gender={elem.gender}
       origin={elem.origin}
    //    onClose={props.onClose}
       image={elem.image}
       />
       })}
    </NavContainer>
    </div>)


}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,

    }
};

export default connect (mapStateToProps, null) (Favorites)