const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    const fav = await Favorite.findByPk(id);
    await fav.destroy();
    const favorites = await Favorite.findAll();
    res.status(200).json(favorites);
  } catch (error) {
    console.log("error en deleteFav controller");
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
