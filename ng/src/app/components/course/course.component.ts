import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input()  course : Course
  constructor() { }

  ngOnInit() {
  }

}
