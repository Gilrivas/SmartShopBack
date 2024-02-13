// login.js
const { User } = require('./database');

async function login(req, res) {
        const { user_name, user_password } = req.body;
      
        const data = await User.findOne({ where: { user_name, user_password } });
      
      
        if (data) {
          console.log('nice')
      
        } else {
          res.status(401).send('Invalid email or password');
        }
      
}

module.exports = login;
