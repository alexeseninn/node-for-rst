const Router = require('express')
const router = new Router
const controller = require('./authController')
const {check} = require('express-validator') 
const authMiddlewaree = require('./middlewaree/authMiddlewaree')
const roleMiddlewaree = require('./middlewaree/roleMiddlewaree')

router.post('/registration', [
    check('username', "имя пользователя не может быть пустым").notEmpty(),
    check('password', "пароль должен быть не менее 6 и не более 14 символов").isLength({min:6, max:14})
] ,controller.registration)
router.post('/login', controller.login)
router.post('/loginq', login)
router.get('/users', roleMiddlewaree(["ADMIN"]) , controller.getUsers) 

function login(res, req){
    try{
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        const usernamel = req.body
        console.log(usernamel)
        const {username, password} = req.body
        console.log(username)
    }catch(e){
        console.log(e)
        res.status(400).json({message: 'login error'})
    }
}

module.exports = router