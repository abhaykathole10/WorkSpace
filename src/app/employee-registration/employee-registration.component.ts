import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkspaceService } from '../services/workspace.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})

export class EmployeeRegistrationComponent implements OnInit {

  regForm!: FormGroup;

  constructor(private fb : FormBuilder, public service: WorkspaceService, private router: Router) { }

  ngOnInit(): void {

    this.regForm = this.fb.group({
      id: Math.floor(Math.random() * (999999 - 100000)) + 100000,
      name : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.maxLength(10)]],
      age : ['', [Validators.required]],
      password : ['', [Validators.required]],
    })
  }

  onReg(){

    let addUrl:string= "http://localhost:8104/projectName/office/addEmployee";
     
    //alert(JSON.stringify(this.regForm.value))

    this.service.addEmployee(addUrl, this.regForm.value).subscribe((response:any)=>{
      
      alert("Employee registered successfully!");
      this.regForm.reset();
      this.router.navigate(["/employee-login"]);

    },err=>{
      console.log("*********", err);
      switch(err.status){
        case 400: 
          this.fourHundredError();
          break;
        case 500:
          this.fiveHundredError();
          break;
        default:
          this.otherErrors();
      }
      alert("Something went wrong")
     })
  }
  fiveHundredError(){
    alert("err 500");
  }
  fourHundredError(){
    alert("err 400");
  }
  otherErrors(){
    alert("other err");
  }
}
