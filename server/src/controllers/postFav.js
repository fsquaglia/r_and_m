const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;

  //verificar que lleguen los datos
  if (!(name && origin && status && image && species && gender)) {
    return res.status(401).send("Faltan datos");
  }

  try {
    const [fav, created] = await Favorite.findOrCreate({
      where: { name: name },
      defaults: {
        id: id,
        origin: origin.name,
        status: status,
        image: image,
        species: species,
        gender: gender,
      },
    });

    if (created) {
      const favorites = await Favorite.findAll();
      res.status(200).json(favorites);
    } else {
      res.status(500).send("El fav ya existe");
    }
  } catch (error) {
    console.log("error en postFav controller");
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
