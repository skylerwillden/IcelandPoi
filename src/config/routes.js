import express from 'express'
import {indexPage, aboutPage, contactPage} from '../app/controllers/index.controller'
import { isSignedIn, requireSignIn} from '../app/helpers/require_signin'
import { allCoursesAPI, oneCourseAPI, createCourseAPI, updateCourseAPI, deleteCourseAPI} from '../app/controllers/courses.controller'
import { signinUserAPI, registerUserAPI} from '../app/controllers/users.controller'

let router = express.Router()

export function configureRoutes(app){
  app.all('*', (req, res, next) => {
    app.locals.signedIn = isSignedIn(req)
    next()
  })

  router.get('/', indexPage)
  router.get('/about', aboutPage)

  router.get('/courses*', indexPage)
  router.get('/register', indexPage)
  router.get('/signin', indexPage)
  //TODO
  router.get('/api/courses', allCoursesAPI)
  router.get('/api/courses/:id', oneCourseAPI)
  router.post('/api/courses', requireSignIn, createCourseAPI)
  router.put('/api/course:id', requireSignIn, updateCourseAPI)
  router.delete('/api/courses/:id', requireSignIn, deleteCourseAPI)

  router.post('/api/users/signin', signinUserAPI)
  router.post('/api/users/register', registerUserAPI)

  app.use('/', router)
}