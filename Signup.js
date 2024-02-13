// signup.js

const { User } = require('./database');

async function signup(req, res) {
  const { user_name, user_email, user_password } = req.body;
  
  const data = await User.findOne({ where: { user_email } });

  if (data) {
    res.status(401).send('Email already exists');
    return;
  }

  try {
    const newUser = await User.create({ user_name, user_email, user_password });
    return res.json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = signup;
