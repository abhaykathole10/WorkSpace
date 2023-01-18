import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { WorkspaceService } from '../services/workspace.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  inLogin: boolean = false;
  
  // name: String = ' to the Office';

  constructor(private service: WorkspaceService, private router: Router) { }

  ngOnInit(): void {
    // this.name = new String(sessionStorage.getItem("name"));
    this.service.receivedStatus().subscribe((data) => {
      this.inLogin = data;
    })
  }

  leavesHistory(){
    this.service.subject.next(true);
    this.router.navigate(['employee-history']); 
  }

  empLogout() {
    // sessionStorage.removeItem("name");    
    this.service.subject.next(false);
    this.router.navigate(['/employee-login']);
  }

}
