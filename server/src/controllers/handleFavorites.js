let myFavorites = [];

function postFav(req, res) {
  const myFav = req.body;
  myFavorites.push(myFav);

  return res.json(myFavorites);
}

function deleteFav(req, res) {
  const {id} = req.params;

  const filtered = myFavorites.filter((fav) => Number(fav.id) !== Number(id))

  myFavorites = [];
  myFavorites = [...filtered];
  return res.json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
};
