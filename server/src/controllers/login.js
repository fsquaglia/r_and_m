const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;

  let existUser = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) existUser = true;
  });

  if (existUser) {
        return res.status(200).json({ access: true })
    } else {

        return res.json({ access: false });
    }
}

module.exports = {
  login,
};
