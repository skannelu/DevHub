import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'at-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectForm: FormGroup;

  minProjectDate = new Date();

  allDevs = [

    { label: 'Sravani', value: 'Sravani Kannelur' },
    { label: 'Bhanu', value: 'Bhanu Khanna' },
    { label: 'Keeru', value: 'Keeru Reddy' },
    { label: 'Ashika', value: 'Ashika Goel' },
    { label: 'Harika', value: 'Harika Kapoor' },

  ]


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]],
      projectName: ['',[Validators.required, Validators.minLength(5)]],  
      description: ['This project is about', [Validators.required, Validators.maxLength(40)]],
      startDate: [new Date(), Validators.required],
      projectType: ['O'],
      selectedDevs: [[]],
      rating: [4]
    })

  }

  hasFormErrors() {
    return !this.projectForm.valid;
  }

  onSubmit() {
    alert(JSON.stringify(this.projectForm.value));
    
  }








}
