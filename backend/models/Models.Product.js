import mongoose from 'mongoose'
const { Schema, model } = mongoose

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    available: {
      type: Boolean,
      default: true
    },
    category: {
      type: String,
      required: true
    },
    subCategory: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: false
    },
    origin: {
      type: String,
      required: true
    },
    bulb: {
      type: String,
      required: false
    },
    lightColor: {
      type: String,
      required: false
    },
    fragrance: {
      type: String,
      required: false
    },
    features: {
      type: [String],
      required: false
    },
    color: {
      type: String,
      required: false
    },
    faceType: {
      type: String,
      enum: ['glass', 'plastic'],
      required: false
    },
    condition: {
      type: String,
      enum: ['new', 'recondition'],
      default: 'new'
    }
  },
  { timestamps: true }
)

export default model('product', productSchema)
