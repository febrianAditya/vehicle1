const { comparePassword } = require("../helpers/bcrypt")
const {User, UserDetail} = require("../models")
const { generateToken, verifyToken } = require("../helpers/jwt")
const { where } = require("sequelize")


class UserControllers {

    static async getAllData(req, res) {
        try {
            const resultData = await User.findAll({
                include: UserDetail
            })
            const result = resultData.map(el => {
                return el.toJSON()
            })
    
            res.status(200).json(result)
            
        } catch (error) {
            console.log(error)
            res.status(500).json(error)        
        }
    }

    static async registerUser(req, res) {
        const {username, email, password} = req.body

        // console.log(username, email, password, "==>? ini");
        let inputUser = {
            username,
            email,
            password
        }
        
        try {
            const resultData = await User.create(inputUser)
            console.log(resultData, "==> THIS IS FINAL");
            
        } catch (error) {
            console.log(error);
            
        }
    }

    static async loginUser(req, res) {
        const {email, password} = req.body
        try {
            const dataEmail = await User.findOne({
                where: {
                    email
                }
            })
            
            if (!dataEmail) {
                res.status(404).json({
                    message: "Email belum terdaftar"
                })
            }

            let manipulateJson = dataEmail.toJSON()
            // console.log(dataEmail.toJSON().password, "==> apaa sih");

            const isValidPassword = comparePassword(password, manipulateJson.password)
            
            // console.log(isValidPassword, "===> FINAL CEK PASSWORD");
            if (!isValidPassword) {
                res.status(400).json({
                    "message": "Email or password is wrong"
                })
            }
            // console.log(manipulateJson, "==> final");
            
            let reponseBody = {
                username: manipulateJson.username,
                email:  manipulateJson.email,
                id: manipulateJson.id
            }
            let initokenYaa = generateToken(reponseBody)

            res.status(200).json({
                token: initokenYaa
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }


    static async editUser(req, res) {
        const { username } = req.body
        const {id} = req.params
        let inputUser = {
            username
        }
        try {
            // console.log(username, "==> INI APA YAA");
            const dataEdit = await User.update(
                inputUser, {
                    where: {
                        id
                    }
                }
            )

            console.log(dataEdit, "==> FINAL RESPONSE");
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = UserControllers