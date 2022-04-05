import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema } = mongoose

const UserSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: 'Is required'
  },
  userEmail: {
    type: String,
    trim: true,
    required: 'Is required',
    unique: true
  },
  userPassword: {
    type: String,
    trim: true,
    required: 'Is required',
    min: 4,
    max: 50
  }
}, { timestamps: true })

UserSchema.pre( 'save', function( next ){
  let user = this
  if( user.isModified( 'userPassword' ) ){
    return bcrypt.hash( user.userPassword, 12, function( err, hash ){
      if( err ){
        console.log('ERROR HASHING ==>', err );
        return next( err, hash )
      }
      user.userPassword = hash
      return next()
    })
  }else{
    return next()
  }
})

export default mongoose.model( 'User', UserSchema )