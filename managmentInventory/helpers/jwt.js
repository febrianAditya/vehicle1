const jwt = require("jsonwebtoken")
const SECRET_KEY = "inirahasiabanget"

function generateToken(payload) {
    const token = jwt.sign(payload, SECRET_KEY)
    return token
}

function verifyToken(token) {
    const result = jwt.verify(token, SECRET_KEY)
    console.log(result);
    
    return result
}

module.exports = {
    generateToken,
    verifyToken
}