import mongoose from 'mongoose'
const { Schema, model } = mongoose

const shopSchema = new Schema(
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
    location: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    coverImage: {
      type: String,
      required: false
    },
    about: {
      type: String,
      required: true
    },
    license: {
      type: String,
      required: true
    },
    features: {
      type: [String],
      required: true
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
  },
  { timestamps: true }
)

export default model('shop', shopSchema)
