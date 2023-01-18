import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkspaceService } from '../services/workspace.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private service: WorkspaceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name : '',
      password : '',
    })
  }

  onLogin(){

    let addUrl:string= "http://localhost:8104/projectName/office/login";
    
    this.service.addEmployee(addUrl, this.loginForm.value).subscribe((response:any)=>{
     
      // debugger
      if(response){
        alert("Employee Logged in successfully!");

        this.service.setUserLogin(response);
        sessionStorage.setItem("name", response.name);
        sessionStorage.setItem("id", response.id)

        this.loginForm.reset();
        this.service.subject.next(true);
        this.router.navigate(["/employee-home"]);
      }
      else{
        alert("Sorry! invalid credentials")
      }

    },err=>{
      alert("Something went wrong")
    })

  }

}


