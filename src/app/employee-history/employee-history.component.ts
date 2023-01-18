import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../services/workspace.service';

@Component({
  selector: 'app-employee-history',
  templateUrl: './employee-history.component.html',
  styleUrls: ['./employee-history.component.css']
})
export class EmployeeHistoryComponent implements OnInit {

  employeeLeaves!: any;
  
  isApproved : boolean = false;
  status : string = "Pending";

  name: String = '';

  constructor(private service: WorkspaceService) { }

  ngOnInit(): void {
    
    // let name: string = "Abhay";

    this.name = new String(sessionStorage.getItem("name")) ;

    this.service.getLeavesByName("http://localhost:8104/projectName/office/getLeavesByName/" + this.name)
    .subscribe((res: any) => {
      alert("Leaves of " + this.name);

      if(res){
        let data:any[]=res;
        if(data.length)
          this.employeeLeaves = data;
          this.status = data[0].status;
      }
      

    },err=>{
      alert("Something went wrong")

    })

  }  

}



