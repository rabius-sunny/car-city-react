import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    area: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    thumbnail: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
)

export default model('user', userSchema)
