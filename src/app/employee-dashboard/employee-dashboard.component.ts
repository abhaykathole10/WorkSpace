import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkspaceService } from '../services/workspace.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  leaveForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private service: WorkspaceService, private router: Router) { }

  ngOnInit(): void {
    // alert(sessionStorage.getItem("name"));
    console.log(this.service.getUserLogin());
    this.leaveForm = this.fb.group({
      // name: this.service.getUserLogin.name,
      applicationId: Math.floor(Math.random() * (999999 - 100000)) + 100000,
      name: sessionStorage.getItem("name"),
      days: '',
      cause: '',
      status: "pending"
    })
  }

  onApply() {

    let addUrl:string= "http://localhost:8104/projectName/office/submitLeave";

    this.service.submitLeave(addUrl, this.leaveForm.value).subscribe((response: any) => {
      
        alert("Leave submitted successfully!");
        //this.leaveForm.reset();
        //window. location. reload()
        this.router.navigate(["/employee-home"]);
      
      },err => {
          alert("Something went wrong")
        })

  }

}

