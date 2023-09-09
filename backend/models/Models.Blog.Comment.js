import mongoose from 'mongoose'
const { Schema, model } = mongoose

const blogCommentSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    comment: {
      type: String,
      required: true,
      maxlength: 100
    }
  },
  { timestamps: true }
)

export default model('blogcomment', blogCommentSchema)
