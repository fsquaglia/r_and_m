const axios = require ('axios')

function getCharById (res, id) {

    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

    axios.get (apiUrl)
    .then((response) => {
        const {id,name, gender, species, origin, image, status } = response.data
        const miPersonaje = {id,name, gender, species, origin, image, status}
    
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(miPersonaje))
    })
    .catch((reason) => {
        res.writeHead(500, {"Content-Type":"text/plain"})
        res.end(reason.message)
    }) 
    
    
}


module.exports = {
    getCharById,
};