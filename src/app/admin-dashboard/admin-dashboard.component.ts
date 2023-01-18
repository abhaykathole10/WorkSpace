import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../services/workspace.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  empData!: any;

  constructor(private service: WorkspaceService) { }

  ngOnInit(): void {
    this.showAllLeaves();
  }

  approveLeave(applicationId : number) { 

    let addUrl = "http://localhost:8104/projectName/office/getLeavesByApplicationId/" + applicationId;

    this.service.getLeavesByApplicationId(addUrl).subscribe((res : any)=>{
      this.service.approveLeave("http://localhost:8104/projectName/office/approveLeave/" + applicationId, res[0])
      .subscribe((res)=>{
        this.showAllLeaves();
      })
    })
  }

  // rejectLeave(name : string) {

  //   let addUrl = "http://localhost:8104/projectName/office/getLeavesByName/" + name;

  //   this.service.getLeavesByName(addUrl).subscribe((res : any)=>{

  //     this.service.rejectLeave("http://localhost:8104/projectName/office/rejectLeave/" + name, res[0])
  //     .subscribe((res)=>{
  //       this.showAllLeaves();
  //     })
  //   })
  // }

  rejectLeave(applicationId : number) {

    let addUrl = "http://localhost:8104/projectName/office/getLeavesByApplicationId/" + applicationId;

    this.service.getLeavesByApplicationId(addUrl).subscribe((res : any)=>{

      this.service.rejectLeave("http://localhost:8104/projectName/office/rejectLeave/" + applicationId, res[0])
      .subscribe((res)=>{
        this.showAllLeaves();
      })
    })
  }

  showAllLeaves() {
    this.service.getAllLeaves("http://localhost:8104/projectName/office/getAllLeaves")
    .subscribe((res: any) => {
      this.empData = res;
    })
  }

}


