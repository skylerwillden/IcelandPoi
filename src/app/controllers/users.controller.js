import passport from 'passport'
import { User } from '../models/user'

export const signupAPI = (req, res, next) => {
    let user = new User
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.email = req.body.email
    user.username = req.body.username
    user.setPassword(req.body.password) 

    user.save(err => {
        if(err){
            res.json({success: false, message: "unable to register user"})
        } else {
            res.end()
        }
    })
}


export const signinAPI = (req, res, next) => {
    passport.authenticate('local', (err, user, info) =>  {
        if(err){
            res.status(404).json(err)
        } else{
            if(user){
                let token = user.generateJWT()
                res.cookie("token", token)
                res.json({"token": token})
            }  else {
                res.status(401).json(err)
            }
        }
    }) (req, res, next)
}