import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkspaceService } from '../services/workspace.service';

import { of, throwError } from 'rxjs';

import { EmployeeRegistrationComponent } from './employee-registration.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpErrorResponse } from '@angular/common/http';

fdescribe('EmployeeRegistrationComponent', () => {
  let component: EmployeeRegistrationComponent;
  let fixture: ComponentFixture<EmployeeRegistrationComponent>;
  
  let mockService: any = null;

  beforeEach(async () => {

    mockService = jasmine.createSpyObj(['addEmployee','postData','getData','putData','delete']);

    await TestBed.configureTestingModule({
      declarations: [ EmployeeRegistrationComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        AppRoutingModule,
      ],
      //providers: [WorkspaceService] //(If service is private we should use this)
      providers: [ { provide: WorkspaceService, useValue: mockService }], //(If service is public)(to mock methods of service)
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test form with invalidators', () => {

    component.regForm.controls["name"].setValue("Abhay");
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#name')!;  

    console.log("||||||||" , nameInput.value);

    expect(nameInput.value).toEqual("Abhay");
    //expect(component.regForm.valid).toBeTruthy(); (error beacause not all fields are filled)
    expect(component.regForm.valid).toBeFalsy();

  })

  it('should test form with invalidators', () => {

    component.regForm.controls["name"].setValue("Abhay");
    component.regForm.controls["email"].setValue("ab@g.com");
    component.regForm.controls["age"].setValue("22");
    component.regForm.controls["password"].setValue("12345");  

    //expect(component.regForm.valid).toBeFalsy(); (When email exceeds 10, it is SUCCESS)
    //expect(component.regForm.valid).toBeFalse(); (When email exceeds 10, it is SUCCESS)
    expect(component.regForm.valid).toBeTruthy(); //(When email is Valid, it is SUCCESS)
    
  })

  it('should test onReg()', () => {
    
    //spyOn(component.service, "addEmployee")
  
    spyOn(window, "alert");

    mockService.addEmployee.and.returnValue(of([]))

    component.regForm.controls["name"].setValue("Abhay");
    component.regForm.controls["email"].setValue("ab@g.com");
    component.regForm.controls["age"].setValue("22");
    component.regForm.controls["password"].setValue("12345"); 

    component.onReg();

    expect(component.service.addEmployee).toHaveBeenCalled();

    expect(window.alert).toHaveBeenCalledTimes(1);
    
  })

  it('should test err', () => {
    // let http = TestBed.get(HttpTestingController);
    // const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    // component.onReg();
    // http.expectOne('url/being/monitored').flush({}, mockErrorResponse);
   
    //spyOn(window, "alert");
    spyOn(component, "fourHundredError");

    const errorResponse = new HttpErrorResponse({
      error: { code: `some code`, message: `some message.` },
      status: 400,
      statusText: 'Bad Request',
   });
   mockService.addEmployee.and.returnValue(throwError(errorResponse));
   component.onReg();
   //spyOn(mockService, 'addEmployee').and.returnValue(throwError(errorResponse));

   //expect(window.alert).toHaveBeenCalledTimes(1);

   expect(component.fourHundredError).toHaveBeenCalled();
  })

  it('should test err500', () => {   
    //spyOn(window, "alert");
    spyOn(component, "fiveHundredError");

    const errorResponse = new HttpErrorResponse({
      error: { code: `some code`, message: `some message.` },
      status: 500,
      statusText: 'Bad Request',
   });
   mockService.addEmployee.and.returnValue(throwError(errorResponse));
   component.onReg();
   expect(component.fiveHundredError).toHaveBeenCalled();
  })

  it('should test otherErr', () => {
    spyOn(component, "otherErrors");

    const errorResponse = new HttpErrorResponse({
      error: { code: `some code`, message: `some message.` },
      status: 606,
      statusText: 'Bad Request',
   });
   mockService.addEmployee.and.returnValue(throwError(errorResponse));
   component.onReg();
   expect(component.otherErrors).toHaveBeenCalled();
  })

});
