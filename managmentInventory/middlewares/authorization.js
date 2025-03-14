const { where } = require("sequelize");
const { User }= require("../models")


async function authorizationUser(req, res, next) {
    const {id} = req.params
    const dataUserCurrent = res.locals.user

    console.log(dataUserCurrent, "==> INI DATA 1");
    console.log(id, "===> INI ID USER");
    
    const dataUser = await User.findOne({
        where: {
            id
        }
    })

    if (!dataUser) {
        res.status(404).json({
            message: "data not found"
        })
    }
    console.log(dataUser.toJSON(), "==> whats");
    

    let dataUserManipulate = dataUser.toJSON()

    if (dataUserManipulate.id === dataUserCurrent.id) {
        next()
    }else {
        res.status(403).json({
            message: "Authorization Error"
        })
    }
    
}


module.exports = authorizationUser