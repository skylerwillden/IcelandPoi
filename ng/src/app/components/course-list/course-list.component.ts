import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  sortField: string = 'id'
  courses$ : Observable<Course[]>
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses$ = this.courseService.getCourses()
  }

  sortBy(field){
    this.sortField = field
  }
  sortCourses(courses : Course[]){
    switch(this.sortField){
      case 'id':
        return courses.sort((a, b) => {return a.id - b.id})
      case 'title':
        return courses.sort(function(a, b){
           return a.title < b.title ? -1 : (a.title > b.title ? 1 : 0)
        })
    }
  }
}
