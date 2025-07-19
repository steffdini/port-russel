const mongoose = require('mongoose')
const User = require('./backend/models/User') // adapte si ton modèle est ailleurs
const bcrypt = require('bcryptjs')
const usersData = require('./backend/seed/users.json')
require('dotenv').config()

async function importUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    const hashedUsers = await Promise.all(
      usersData.map(async user => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        return { ...user, password: hashedPassword }
      })
    )
    await User.insertMany(hashedUsers)
    console.log('✅ Utilisateurs importés avec succès.')
    await mongoose.disconnect()
  } catch (err) {
    console.error('❌ Erreur d’importation :', err)
  }
}

importUsers()