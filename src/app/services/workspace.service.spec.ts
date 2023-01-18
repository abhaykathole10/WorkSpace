import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WorkspaceService } from './workspace.service';

describe('WorkspaceService', () => {
  
  let service: WorkspaceService;
  
  let httpTestingController : HttpTestingController;
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [    
        HttpClientTestingModule,     
      ],
    });
    service = TestBed.inject(WorkspaceService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be getUserLogin w Null', () => {
    //expect(service.getUserLogin).toBeFalsy();
    console.log("++++", service.getUserLogin())
    expect(service.getUserLogin()).toBeUndefined();
    //console.log(service.getUserLogin());
  });

  it('should be getUserLogin wo Null', () => {
    let mockData = {"name" : "Abhay"}
    service.setUserLogin(mockData);
    //expect(service.getUserLogin).toBeFalsy();
    expect(service.getUserLogin()).toEqual(mockData);
    console.log(service.getUserLogin());
  });

  it('should be getUserLogin wo Null', () => {
    let mockData = {"name" : "Abhay"}
    let url: string = "http://localhost:8104/projectName/office/addEmployee";
    service.addEmployee(url, mockData).subscribe(res=>{
      expect(res).toEqual(mockData);
    })
    let response = httpTestingController.expectOne(url);
    //console.log(response);
    //console.log(JSON.stringify(response));
    expect(response.request.method).toEqual('POST');
    response.flush(mockData);

  });

  it('should be getUserLogin wo Null', () => {
    let mockData = {"name" : "Abhay"}
    let url: string = "http://localhost:8104/projectName/office/approveLeave";
    service.approveLeave(url, mockData).subscribe(res=>{
      expect(res).toEqual(mockData);
    })
    let response = httpTestingController.expectOne(url);
    //console.log(response);
    //console.log(JSON.stringify(response));
    expect(response.request.method).toEqual('PUT');
    response.flush(mockData);

  });

});
