const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {

    try {
    const authorization = req.headers.authorization;

    if(!authorization) {
        return res.send('I am sorry. You have registered an invalid token. Please, try again.')
    }
    //bearer ira a strategy, token a jwt
    const [ strategy, token ]  = authorization.split(" ");
    const decoded = jwt.verify(token, 'secreto');
    
    //al objeto request le digo q usuario eres y q rol eres
    req.userId = decoded.userId;
    req.roleId = decoded.roleId;
    console.log(decoded);
    
    next()
    }catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = verifyToken;