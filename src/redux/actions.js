export const ADD_FAV = "add_fav"
export const REMOVE_FAV = "remove_fav"


export const addFav = (personaje) => {
    return {type:ADD_FAV, payload:personaje}    
};

export const removeFav = (id) => {
    return {type:REMOVE_FAV, payload:id}    
};

