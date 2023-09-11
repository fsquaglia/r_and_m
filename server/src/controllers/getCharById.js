const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;
  let idParams = Number(id);
  try {
    const { data } = await axios(`${URL}/${idParams}`);

    const { id, status, name, species, origin, image, gender, error } = data;
    const character = { id, status, name, species, origin, image, gender };
    return name
      ? res.json(character)
      : res.status(404).json({ messaje: error });
  } catch (reason) {
    res.status(500).json({ messaje: reason });
  }
}

module.exports = {
  getCharById,
};

/*
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
*/
