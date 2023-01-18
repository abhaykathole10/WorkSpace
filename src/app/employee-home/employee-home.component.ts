import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  name : String = new String (sessionStorage.getItem("name"));
 
  input2:number=0;;
  input1:number=0;;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(one:number,b:number=4): number{
    return Number(one) + Number(b);    
  }

}
