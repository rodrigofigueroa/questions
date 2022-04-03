import mongoose from 'mongoose'

const { Schema } = mongoose

const QuestionSchema = new Schema({
  userQuestion: {
    type: String,
    trim: true,
    required: 'The Question is Required!',
    unique: true,
    max: 50,
    min: 5,
  }
}, { timestamps: true })

export default mongoose.model( 'Question', QuestionSchema )