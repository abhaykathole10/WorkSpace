import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminForm!: FormGroup;

  constructor(private fb: FormBuilder, private adhttp: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      adEmail: '',
      adPass: '',
    })
  }

  adminLogin() { 
        const user = this.adminForm.value.adEmail === "abhay" && this.adminForm.value.adPass === "abhay";
       
        if (user) {
          alert("Admin logged in successfully!");
          this.adminForm.reset();
          this.router.navigate(['admin-dashboard'])
        }

        else {
          alert("Sorry! invalid credentials")
        }

      }
}


