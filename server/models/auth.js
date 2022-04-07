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

UserSchema.methods.comparePassword = function( userPassword, next ){
  console.log( this );
  return bcrypt.compare( userPassword, this.userPassword, function( err, match ){
    if( err ){
      console.log('There was an error', err )
      return next( err, false )
    }
    console.log('COMPARED is true', match )
    return next( null, match )
  })
}

export default mongoose.model( 'User', UserSchema )