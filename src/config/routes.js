import express from 'express'
import {indexPage, aboutPage, contactPage} from '../app/controllers/index.controller'
import { isSignedIn, requireSignIn} from '../app/helpers/require_signin'
import { allCoursesAPI, oneCourseAPI, createCourseAPI, updateCourseAPI, deleteCourseAPI} from '../app/controllers/courses.controller'
import { signinAPI, signupAPI} from '../app/controllers/users.controller'
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
  router.post('/api/courses', createCourseAPI)
  router.put('/api/course:id', updateCourseAPI)
  router.delete('/api/courses/:id', deleteCourseAPI)

  router.get('/api/user/signin', signinAPI)
  router.post('/api/user/signup', signupAPI)

  app.use('/', router)
}