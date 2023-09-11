import axios from "axios";
export const ADD_FAV = "add_fav";
export const REMOVE_FAV = "remove_fav";
export const FILTER = "filter";
export const ORDER = "order";
export const NAVSHOWVAR = "navShowVar";

//antes de express
// export const addFav = (personaje) => {
//     return {type:ADD_FAV, payload:personaje}
// };

//con express
// export const addFav = (character) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav";
//   return (dispatch) => {
//     axios.post(endpoint, character).then(({ data }) => {
//       return dispatch({
//         type: ADD_FAV,
//         payload: data,
//       });
//     });
//   };
// };

//con async await y try catch
export const addFav = (character) => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    try {
      const response = await axios.post(endpoint, character);
      const data = response.data;
      // Despacha la acción una vez que la solicitud sea exitosa
      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      window.alert("Hubo un error");
    }
  };
};

//con express
export const removeFav = (id) => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    try {
      const response = await axios.delete(endpoint);
      const data = response.data;
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      window.alert("Hubo un error");
    }
  };
};

//antes de express
// export const removeFav = (id) => {
//     return {type:REMOVE_FAV, payload:id}
// };

export const filterCard = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

//parámetro recibido será A ascendente o D descentente
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const navShowAction = (value) => {
  return {
    type: NAVSHOWVAR,
    payload: value,
  };
};
