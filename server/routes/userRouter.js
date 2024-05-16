const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

const router = require('express').Router()


router.post('/register',userCtrl.register)

router.post('/login',userCtrl.login)

router.get('/logout',userCtrl.logout)

router.get('/refresh_token',userCtrl.refreshtoken)


 

module.exports = router