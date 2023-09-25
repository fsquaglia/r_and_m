const express = require("express");
const router = express.Router();
const postUser = require("../controllers/postUser");

const { login } = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

const { getCharById } = require("../controllers/getCharById");

router.get("/character/:id", getCharById);

router.post("/login", postUser);
router.get("/login", login);

router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
