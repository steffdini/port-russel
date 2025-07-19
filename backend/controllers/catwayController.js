const Catway = require('../models/Catway')

exports.getAll = async (_, res) => res.json(await Catway.find())
exports.getOne = async (req, res) => res.json(await Catway.findOne({ catwayNumber: req.params.id }))
exports.create = async (req, res) => res.status(201).json(await new Catway(req.body).save())
exports.update = async (req, res) => {
  const updated = await Catway.findOneAndUpdate({ catwayNumber: req.params.id }, { catwayState: req.body.catwayState }, { new: true })
  res.json(updated)
}
exports.delete = async (req, res) => {
  await Catway.findOneAndDelete({ catwayNumber: req.params.id })
  res.json({ message: 'Catway supprimé' })
}