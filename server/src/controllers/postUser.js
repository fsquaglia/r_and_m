const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  //si no recibo los datos correctos por body arrojo un error
  if (!email || !password || email === "" || password === "") {
    return res.status(400).send("Faltan datos");
  }

  try {
    //buscamos y si no existe creamos el usuario
    const [user, created] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        password: password,
      },
    });

    //verificamos si se creo o existe
    if (created) {
      res.status(200).json({ response: user });
    } else {
      res.status(500).json({ error: "Email existente, usuario no creado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
