import mongoose from 'mongoose'
const { Schema, model } = mongoose

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'blogcomment'
      }
    ]
  },
  { timestamps: true }
)

export default model('blog', blogSchema)
