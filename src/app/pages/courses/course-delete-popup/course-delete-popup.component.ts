import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-course-delete-popup',
  templateUrl: './course-delete-popup.component.html',
  styleUrls: ['./course-delete-popup.component.css']
})
export class CourseDeletePopupComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<CourseDeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
