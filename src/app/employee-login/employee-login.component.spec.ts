import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkspaceService } from '../services/workspace.service';

import { EmployeeLoginComponent } from './employee-login.component';

describe('EmployeeLoginComponent', () => {
  let component: EmployeeLoginComponent;
  let fixture: ComponentFixture<EmployeeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLoginComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [WorkspaceService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log("login before called");
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should check onLogin', () => {
    spyOn(component, "onLogin");  //for Mocking
    component.onLogin();
    expect(component.onLogin).toHaveBeenCalled();
    expect(component.onLogin).toHaveBeenCalledTimes(1);
  });

});
