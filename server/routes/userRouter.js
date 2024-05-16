const userCtrl = require('../controllers/userCtrl')


const router = require('express').Router()


router.post('/register',userCtrl.register)



router.get('/refresh_token',userCtrl.refreshtoken)

 

