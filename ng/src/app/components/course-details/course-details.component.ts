import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  isToConfirmDelete : boolean = false
  course$ : Observable<Course>

  
  constructor(private courseService : CourseService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.course$ = this.courseService.getCourse(this.route.snapshot.params['id'])
  }

  toggleConfirmDelete() : void{
    this.isToConfirmDelete = !this.isToConfirmDelete
  }

  deleteCourse(course : Course) : void{
    this.courseService.deleteCourse(course).subscribe(data  => {
        // this.toastr.success("Movie was deleted successfully")
        this.router.navigate(['/courses'])
    })
  }

}
