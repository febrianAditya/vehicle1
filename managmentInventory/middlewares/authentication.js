const { where } = require("sequelize")
const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models")

async function authenticateUser(req, res, next) {
    try {
        const token = req.get("token")
        const isValid = verifyToken(token)

        const dataWithToken = await User.findOne({
            where: {
                email: isValid.email,
                id: isValid.id
            }
        })

        // console.log(dataWithToken, "=> INI DATANYA");
        if (!dataWithToken) {
            res.status(401).json({
                message: "Anauthorized"
            })
        }

        let manipulateJson = dataWithToken.toJSON()
        // console.log(manipulateJson, "==> FINAL");
        
        res.locals.user = manipulateJson
        next()
        
    } catch (error) {
        // console.log(error, "==> ini error");
        res.status(500).json(error)
    }
}

module.exports = authenticateUser