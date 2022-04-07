import Question from "../models/question"
import User     from '../models/auth'

export const register_question = async (req, res) => {
  const { userQuestion } = req.body
  // Validation
  if ( !userQuestion )
    return res
      .status( 400 )
      .send( "Sorry but can you plase write a valid Question!" )
  if( userQuestion.length < 5 ) return res.status( 400 ).send( 'Sorry but the Question has to be more than 4 words' )
  const checkQuestion = await Question.findOne({ userQuestion }).exec()
  if ( checkQuestion )
    return res.status( 400 ).send( "Sorry but the question already exist!" )
  // Saving
  const newQuestion = new Question( req.body )
  console.log(newQuestion )
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

export const register_user = async ( req, res ) => {
  const { userPassword, userName, userEmail } = req.body
  // Validating
  if( !userName || !userPassword ||  !userEmail ) return res.status( 400 ).send( 'Can you please write something!' )
  if( userPassword.length < 4 ) return res.status( 400 ).send('Please Write more than 4 words!' )
  let checkEmail = await User.findOne({ userEmail }).exec()
  if( checkEmail ) return res.status( 400 ).send( 'Sorry but the Email is already Taken!' )
  // Save user
  try {
    let user = new User( req.body )
    await user.save()
    console.log( user )
    return res.json({ ok: true, sucess: true })
  } catch ( err ) {
    console.error( err )
    return res.status( 400 ).send( 'There was a problem with you request!' )
  }
}


export const loging = async ( req, res ) => { 
  const { userEmail, userPassword } = req.body
  // Validation
  if( !userEmail || !userPassword ) return res.status( 400 ).send( 'Can you please write something' )
  try {
    let user = await User.findOne({ userEmail }).exec()
    if( !user ) return res.status( 400 ).send( 'Sorry but there isnt any email' )
    console.log( user )
    user.comparePassword( userPassword, function( err, match ){
      console.log( 'ERROR comparing your password', err );
      if( !match || err ) return res.status( 400 ).send( 'Sorry but you password is incorrect!' )
      console.log('comapring was successfull' )
      res.json({ ok : true })
    })
  } catch ( err ) {
    console.error( err )
    res.status( 400 ).send( 'There was an error loging on the page' )
  }
}