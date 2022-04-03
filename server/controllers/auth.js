import Question from "../models/question"

export const register_question = async (req, res) => {
  const { userQuestion } = req.body
  // Validation
  if ( !userQuestion )
    return res
      .status( 400 )
      .send( "Sorry but can you plase write a valid Question!" )
  const checkQuestion = await Question.findOne({ userQuestion }).exec()
  if ( checkQuestion )
    return res.status( 400 ).send( "Sorry but the question already exist!" )
  // Saving
  const newQuestion = new Question( req.body )
  try {
    await newQuestion.save()
    console.log( newQuestion )
    res.json({ ok: true })
  } catch ( err ) {
    console.error( err )
    res
      .status( 400 )
      .send( "Sorry but there was an error uploading your question :c" )
  }
}
