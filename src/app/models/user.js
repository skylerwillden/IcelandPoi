import mongoose, { mongo } from 'mongoose'
import crypto from 'crypto'
import { APP_SECRET, AUTH_TOKEN_EXPIRES_IN } from '../../config/vars'
import jwt from 'jsonwebtoken'

const Schema = mongoose.Schema

let courseSchema = new Schema({
  crn: String,
  title: String,
  description: String,
  instructor: String,
  creditHours: Number,
  semester: String,
  year: Number,
  posterImage: String,
  beginDate: Date,
  endDate: Date,
  added_at: Date,
  updated_at: Date
  // instructors: [{type: Schema.Types.ObjectId, ref: "Instructor"}],
  // students: [{type: Schema.Types.ObjectId, ref: "Student"}],
  // creator: {type: Schema.Types.ObjectId, ref: "User"}
})

courseSchema.virtual('id').get(function(){
  return this._id.toHexString()
})

courseSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v
    delete ret._id
  }
})

let userSchema = new Schema({
  username: {
      type: String, 
      unique: true, 
      required: true, 
      trim: true
  },
  firstName: {
      type: String, 
      required: true, 
      trim: true
  },
  lastName: {
      type: String, 
      required: true, 
      trim: true
  },
  hash: String,
  salt: String
})

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 128, 'sha512').toString('hex')
}

userSchema.methods.isValidPassword = function(password){
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 128, 'sha512').toString('hex')
  return this.hash === hash
}

userSchema.methods.generateJWT = function(){
  let expirerOn = new Date()
  expirerOn.setDate(expireOn.getDate()  + AUTH_TOKEN_EXPIRES_IN)

  return jwt.sign({
      _id: this._id,
      email:  this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      exp: parseInt(expireOn.getTime() / 1000)
  }, APP_SECRET)
}


export let Course = mongoose.model("Course", courseSchema)
export let User = mongoose.model("User", userSchema)