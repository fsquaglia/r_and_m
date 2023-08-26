import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
   width: 350px;
  background-color: #3c3e44;
  color: white;
  border-radius: 10px;
  font-family: 'Calibri', sans-serif; 
  font-size: 0.8em; 
  margin:10px;

  button {
    color: white;
    background-color: transparent;
    border: 1px solid #ff9800;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 0.5rem;
  }

  a {
    color: #fdcc91;
    text-decoration: none;
  }

  h2 {
    color: #fdcc91;
  }
`;
const StyledImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
`;

// export default function Card(props) {
function Card(props) {
 
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         props.removeFav(props.id)
      }  else {
         setIsFav(true)
         props.addFav(props)

      } 
   };

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <StyledCard>

         {isFav ? (
               <button style={{ border: 'none'}} onClick={handleFavorite}>❤️</button>
            ) : (
               <button style={{ border: 'none'}} onClick={handleFavorite}>🤍</button>
            )
         }
         {useLocation().pathname !== '/favorites' ? <button onClick={()=>props.onClose(props.id)}>X</button> : null}
         
         
         <Link to={`/detail/${props.id}`}>
            <h2>Name: {props.id + " - " + props.name}</h2>
         </Link>


         <h3>Satus: {props.status}</h3>
         <h3>Specie: {props.species}</h3>
         <h3>Gender: {props.gender}</h3>
         <h3>Origin: {props.origin.name}</h3>
         <StyledImage src={props.image} alt='' />

      </StyledCard>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (personaje) => {
         dispatch(addFav(personaje))
      }, 
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
};

export default connect(mapStateToProps, mapDispatchToProps) (Card)
