import ModelsSeller from '../models/Models.Seller'
import ModelsUser from '../models/Models.User'

export const signInUser = async (req, res) => {
  const { phone, password } = req.body
  try {
    const response = await ModelsUser.findOne({ phone, password })
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(403).json({ error, message: error.message })
  }
}
export const signInSeller = async (req, res) => {
  const { email, password } = req.body
  try {
    const response = await ModelsSeller.findOne({ email, password })
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(403).json({ error, message: error.message })
  }
}
export const signupUser = async (req, res) => {
  try {
    const response = await ModelsUser.create(req.body)
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}
export const signupSeller = async (req, res) => {
  try {
    const response = await ModelsSeller.create(req.body)
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}
