import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      required: true,
      index: { type: 'text' },
    },
    role: {
      type: String,
      enum: ['newbie', 'student', 'teacher'],
    },
  },
  { timestamps: { createdAt: 'created', updatedAt: 'modified' } }
)

export const users = mongoose.model('users', userSchema)
