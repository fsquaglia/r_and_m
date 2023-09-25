const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;

  //si no recibo los datos por query arrojo un error
  if (!email || !password || email === "" || password === "") {
    return res.status(400).send("Faltan datos");
  }

  try {
    //verificar ei el email existe en la DB
    const logEmail = await User.findOne({ where: { email: email } });

    if (logEmail === null) {
      //el email NO existe en la DB
      res.status(403).send("Usuario no encontrado");
    } else {
      //el email existe en la DB, verificamos la password
      if (logEmail.password === password) {
        //coinciden las passwords
        res.status(200).json({ access: true });
      } else {
        //password distintas
        res.json({ access: false });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;

  let existUser = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) existUser = true;
  });

  if (existUser) {
    return res.status(200).json({ access: true });
  } else {
    return res.json({ access: false });
  }
}
*/

module.exports = { login };
