export const ADD_FAV = "add_fav"
export const REMOVE_FAV = "remove_fav"
export const FILTER = 'filter'
export const ORDER = 'order'

export const addFav = (personaje) => {
    return {type:ADD_FAV, payload:personaje}    
};

export const removeFav = (id) => {
    return {type:REMOVE_FAV, payload:id}    
};

export const filterCard = (gender) => {
    return {
        type: FILTER,
        payload:gender,
    }
};

//parámetro recibido será A ascendente o D descentente
export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
};