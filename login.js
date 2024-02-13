// login.js
const { User } = require('./database');
const jwt = require('jsonwebtoken');

async function login(req, res) {
        const { user_name, user_password } = req.body;
       
        const data = await User.findOne({ where: { user_name, user_password } });
      
      
        if (data) {
          const token = generateAuthToken(data);
          res.json({ token });
          console.log('nice', token)
      
        } else {
          res.status(401).send('Invalid email or password');
        }

        function generateAuthToken(userId) {
          const payload = { userId };
          const secret = 'true';
          const token = jwt.sign(payload, secret);
          return token;
        }
        
        
}

module.exports = login;
