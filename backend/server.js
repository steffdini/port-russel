const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error(err))

// Routes
app.use('/users', require('./routes/userRoutes'))
app.use('/catways', require('./routes/catwayRoutes'))
app.use('/reservations', require('./routes/reservationRoutes'))
app.use('/login', require('./routes/loginRoutes'))

app.listen(process.env.PORT || 3000, () =>
  console.log('Serveur lancé sur le port 3000')
)