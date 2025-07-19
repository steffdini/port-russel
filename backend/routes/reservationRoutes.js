const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/reservationController')
const auth = require('../middlewares/auth')

router.get('/', auth, ctrl.getAll)
router.get('/:id', auth, ctrl.getOne)
router.post('/', auth, ctrl.create)
router.put('/:id', auth, ctrl.update)
router.delete('/:id', auth, ctrl.delete)

module.exports = router