import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courses.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup
  isEdit: boolean

  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private fb : FormBuilder,
    private router: Router,
    private toastr : ToastrService){ }

  ngOnInit() {
    this.courseForm = this.fb.group({
      id: [null],
      crn: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      instructor: [null, Validators.required],
      creditHours: [null, [Validators.required, Validators.min(1), Validators.max(4)]],
      semester: [null, Validators.required],
      year: [2020, [Validators.required, Validators.min(2015), Validators.max(2020)]],
      posterImage: [null, [Validators.required, Validators.pattern(/https?:\/\/.+(svg|jpg|png|gif)/)]],
      beginDate: [null, Validators.required],
      endDate: [null],
      added_at: [null],
      updated_at: [null]
    })
    this.isEdit = !!this.route.snapshot.params['id']
    if (this.isEdit){
      this.courseService.getCourse(this.route.snapshot.params['id']).subscribe(
        m => this.courseForm.patchValue(m)
      )
    }
  }
  get crn(){return this.courseForm.get('crn')}
  get title(){return this.courseForm.get('title')}
  get description(){return this.courseForm.get('description')}
  get instructor(){return this.courseForm.get('instructor')}
  get creditHours(){return this.courseForm.get('creditHours')}
  get semester(){return this.courseForm.get('semester')}
  get year(){return this.courseForm.get('year')}
  get posterImage(){return this.courseForm.get('posterImage')}
  get beginDate(){return this.courseForm.get('beginDate')}
  get endDate(){return this.courseForm.get('endDate')}


  submitForm(f : NgForm){
    if(f.valid){
      const course : Course = Object.assign({}, this.courseForm.value)
      if (this.isEdit){
        this.courseService.updateCourse(course).subscribe(data => {
          this.toastr.success("Course updated added.")
          this.router.navigate([`/courses/${course.id}`])
        })
      }
      else {
        this.courseService.addCourse(course).subscribe(data => {
          this.toastr.success("Course successfully added.")
          this.router.navigate(['/courses'])
        })
      }
    }
  }
}
