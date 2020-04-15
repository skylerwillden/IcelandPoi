import { Observable, of } from 'rxjs';
import { Course } from '../models/Course';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http'

const httpHeaders = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
@Injectable()

export class CourseService{
    coursesUrl = "/api/courses"
    constructor(private http: HttpClient){}

    getCourse(id): Observable<Course> {
        let url = `${this.coursesUrl}/${id}`
        return this.http.get<Course>(url)
    }

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.coursesUrl)
    }

    addCourse(course : Course) : Observable<Course>  {
        return this.http.post<Course>(this.coursesUrl, course,  httpHeaders)
      }
    

    updateCourse(course: Course) : Observable<Course> {
        let url = `${this.coursesUrl}/${course.id}`
        return this.http.put<Course>(url, course,  httpHeaders)
    }

    deleteCourse(course : Course) : Observable<{}> {
        let url = `${this.coursesUrl}/${course.id}`
        return this.http.delete(url, httpHeaders)
      }
}


                    