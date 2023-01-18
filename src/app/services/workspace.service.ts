import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WorkspaceService {

  private userLogin: any; 

  public subject = new Subject<boolean>();

  constructor(private http : HttpClient) {}

  getUserLogin(){
    return this.userLogin;
  }

  setUserLogin(user:any){
    this.userLogin = user;
  }
  
  //addEmployee(mod)
  addEmployee(url:string, data: any){
    return this.http.post(url,data);
  }

  //getAllEmployees()
  getEmployees(url: string){
    return this.http.get(url);
  }

  //submitLeave(mod)
  submitLeave(url: string, data: any){
    return this.http.post(url,data);
  }
  
  //getAllLeaves()
  getAllLeaves(url: string){
    return this.http.get(url);
  }

  //getLeavesByName({name})
  getLeavesByName(url: string){
    return this.http.get(url);
  }

  //getLeavesByApplicationId({applicationId})
  getLeavesByApplicationId(url: string){
    return this.http.get(url);
  }

  //approveLeave(mod, name)
  approveLeave(url: string, data: any){
    return this.http.put(url, data);
  }

  //rejectLeave(mod, name)
  rejectLeave(url: string, data: any){
    return this.http.put(url, data);
  }

  receivedStatus(): Observable<boolean>{
    return this.subject.asObservable();
  }

}
