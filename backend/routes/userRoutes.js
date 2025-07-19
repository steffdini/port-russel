const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/userController')
const auth = require('../middlewares/auth')

router.get('/', auth, ctrl.getAll)
router.get('/:email', auth, ctrl.getOne)
router.post('/', ctrl.create)
router.put('/:email', auth, ctrl.update)
router.delete('/:email', auth, ctrl.delete)

module.exports = router