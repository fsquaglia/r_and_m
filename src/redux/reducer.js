import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites:[],
    allFavorites: [],
    detail: {}
};


const rootReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_FAV:
            return {
              ...state,
              myFavorites: [...state.myFavorites, action.payload],
              allFavorites: [...state.allFavorites, action.payload]
            };
        case REMOVE_FAV:
            let newFavorites = state.myFavorites.filter(char => char.id !== Number(action.payload))
            return {
                ...state,
                myFavorites: newFavorites,
                allFavorites: newFavorites
            };

        case FILTER:
            let favoritesFiltered = action.payload === "All" ? state.allFavorites : state.allFavorites.filter(char => char.gender === action.payload)
            return {
                ...state, 
                myFavorites: favoritesFiltered
            };       
        case ORDER:
            let favoritesOrdered = state.myFavorites.sort((a, b) => {
              return action.payload === "A" ? a.id - b.id : b.id - a.id
            })
          return {
              ...state,
              myFavorites: favoritesOrdered
          };

        default:
            return state;
    }
};

export default rootReducer;


