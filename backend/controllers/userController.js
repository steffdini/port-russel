const User = require('../models/User')

exports.getAll = async (_, res) => res.json(await User.find())
exports.getOne = async (req, res) => res.json(await User.findOne({ email: req.params.email }))
exports.create = async (req, res) => res.status(201).json(await new User(req.body).save())
exports.update = async (req, res) => {
  const updated = await User.findOneAndUpdate({ email: req.params.email }, req.body, { new: true })
  res.json(updated)
}
exports.delete = async (req, res) => {
  await User.findOneAndDelete({ email: req.params.email })
  res.json({ message: 'Utilisateur supprimé' })
}