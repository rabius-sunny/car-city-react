import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default model('user', userSchema)
