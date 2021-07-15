const jwt = require('jsonwebtoken');
const secret = 'asi35H$)(RGTBS34nfs'

const checkThis = (token) => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  })
}

const token = jwt.sign({
  id : 'lsh',
  isAdmin: false
}, secret, { 
  expiresIn : 2
});

setTimeout(() => {
  checkThis(token);
}, 3000)
