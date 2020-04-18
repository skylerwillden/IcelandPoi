import express from 'express'
import {indexPage, aboutPage} from '../app/controllers/index.controller'
import { isSignedIn, requireSignIn} from '../app/helpers/require_signin'
import { allLocationsAPI } from '../app/controllers/locations.controller'
import { signinUserAPI, registerUserAPI} from '../app/controllers/users.controller'

let router = express.Router()

export function configureRoutes(app){
  app.all('*', (req, res, next) => {
    app.locals.signedIn = isSignedIn(req)
    next()
  })

  router.get('/', indexPage)
  router.get('/about', aboutPage)

  router.get('/locations*', indexPage)
  router.get('/register', indexPage)
  router.get('/signin', indexPage)
  //TODO
  router.get('/api/locations', allLocationsAPI)

  router.post('/api/users/signin', signinUserAPI)
  router.post('/api/users/register', registerUserAPI)

  app.use('/', router)
}