import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkspaceService } from '../services/workspace.service';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
       HttpClientTestingModule,      
     ],
      declarations: [AdminDashboardComponent],
      providers: [WorkspaceService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
      //to render HTML content
      fixture.detectChanges();
      console.log("before called");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test ngInit', () => {
    spyOn(component, "showAllLeaves")
    component.ngOnInit();
    expect(component.showAllLeaves).toHaveBeenCalled();
    //expect(component.showAllLeaves).toEqual(2);
    expect(component.showAllLeaves).toHaveBeenCalledTimes(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should test calculate with one argument', () => {
  //   const total = component.calculate(20);
  //   expect(total).toEqual(24);
  // });

  // it('should test calculate with two argument', () => {
  //   const total = component.calculate(20,10);
  //   expect(total).toEqual(30);
  // });

  // it('should test input1', () => {
  //   const hostElement: HTMLElement = fixture.nativeElement;
  //   const nameInput: HTMLInputElement = hostElement.querySelector('#inputOne')!;
  //   nameInput.value="12";
  //   nameInput.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   expect(String( component.input1)).toEqual("12");
  // });

  // it('should test calculate with html', () => {
  //   const hostElement: HTMLElement = fixture.nativeElement;
  //   const nameInput: HTMLInputElement = hostElement.querySelector('#inputOne')!;
  //   nameInput.value="12";
  //   nameInput.dispatchEvent(new Event('input'));
  //   const nameInputButton: HTMLInputElement = hostElement.querySelector('input[type="button"]')!;     
  //   nameInputButton.dispatchEvent(new Event('click'));
  //   fixture.detectChanges();
  //   const result: HTMLInputElement = hostElement.querySelector('.result')!;
  //   console.log(result.textContent);
  //   expect(result.textContent).toContain("16");
  // });

  // it('should test form with invalidator', () => {
  //   component.users.controls["name"].setValue("adi");
  //   const hostElement: HTMLElement = fixture.nativeElement;
  //   const nameInput: HTMLInputElement = hostElement.querySelector('#name')!;
  //   console.log("inputValid",nameInput.value);
  //   expect(nameInput.value).toEqual("adi");
  //   expect(component.users.valid).toBeFalse();

  // });

  // it('should test form with invalidator', () => {
  //   component.users.controls["name"].setValue("adi");
  //   component.users.controls["email"].setValue("adi@gmail");
  //   component.users.controls["password"].setValue("adi123");
  //   component.users.controls["repeatPassword"].setValue("adi123");
  //   expect(component.users.valid).toBeTrue();
  //   expect(component.age).toBeFalsy();
  //   expect(component.age).toBeNull();

  // });

  // it('should test onSubmit', () => {
  //   //mocking postData() of service
  // //spyOn(component.service,"postData")
  // spyOn(window,"alert");
  // mockService.postData.and.returnValue(of([]));
  // component.users.controls["name"].setValue("adi");

  //   component.users.controls["email"].setValue("adi@gmail");
  //   component.users.controls["password"].setValue("adi123");
  //   component.users.controls["repeatPassword"].setValue("adi123");

  //   component.onSubmit();
  //   expect(component.service.postData).toHaveBeenCalled();
  //   expect(window.alert).toHaveBeenCalledTimes(2);
  // });

});
