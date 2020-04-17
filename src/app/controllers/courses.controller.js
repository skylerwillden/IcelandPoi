import { Course } from '../models/user'

export const allCoursesAPI = (req, res, next) => {
    Course.find().exec((err, courses)  => {
        if(err){
            res.json({sucess: false, message: 'Failed query'})
            res.end()
        } else {
            res.write(JSON.stringify(courses))
            res.end()
        }
    })
}

export const oneCourseAPI = (req, res, next) => {
    Course.findOne({_id: req.params.id}).exec()((err, course)  => {
        if(err){
            res.json({sucess: false, message: 'Failed query'})
            res.end()
        } else {
            res.write(JSON.stringify(courses))
            res.end()
        }
    })
}

export const createCourseAPI = (req, res, next) => {
    let course = new Course(req.body)
    course.save(err => {
        if(err){
            res.json({success: false, message: "unable to save"})
        } else{
            res.end()
        }
    })
}

export const updateCourseAPI = (req, res, next) => {
    Course.findOne({_id: req.params.id}).exec()((err, course)  => {
        if(err){
            res.json({sucess: false, message: 'Failed query'})
            res.end()
        } else {
            Object.assign(course, req.body)
            course.save(err => {
                if(err){
                    res.json({success: false, message: "unable to update"})
                } else{
                    res.end()
                }
            })
        }
    })
}

export const deleteCourseAPI = (req, res, next) => {
    Course.findOne({_id: req.params.id}).exec()((err, course)  => {
        if(err){
            res.json({sucess: false, message: 'Failed query'})
            res.end()
        } else {
            Coursse.findByIdAndDelete(req.params.id, err  => {
                if(err){
                    res.json({success: false, message: "unable to delete"})
                } else{
                    res.end()
                }
            })
        }
    })
}