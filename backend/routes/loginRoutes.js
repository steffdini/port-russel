// backend/routes/loginRoutes.js
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

router.post('/', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Identifiants incorrects' })
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '2h' })
  res.json({ token })
})

module.exports = router