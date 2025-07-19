const Reservation = require('../models/Reservation')

exports.getAll = async (_, res) => res.json(await Reservation.find())
exports.getOne = async (req, res) => res.json(await Reservation.findById(req.params.id))
exports.create = async (req, res) => res.status(201).json(await new Reservation(req.body).save())
exports.update = async (req, res) => {
  const updated = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updated)
}
exports.delete = async (req, res) => {
  await Reservation.findByIdAndDelete(req.params.id)
  res.json({ message: 'Réservation supprimée' })
}