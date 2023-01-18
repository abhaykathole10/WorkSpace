import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeHistoryComponent } from '../employee-history/employee-history.component';
import { WorkspaceService } from '../services/workspace.service';

import { EmployeeDashboardComponent } from './employee-dashboard.component';

describe('EmployeeDashboardComponent', () => {
  let component: EmployeeDashboardComponent;
  let fixture: ComponentFixture<EmployeeDashboardComponent>;
  let mockService: WorkspaceService;

  let service: WorkspaceService;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj(['getUserLogin','getData','putData','delete']);

    //service = TestBed.inject(WorkspaceService);

    await TestBed.configureTestingModule({
      declarations: [ EmployeeDashboardComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpClientModule,
      ],
      providers:[{provide: WorkspaceService, useValue: mockService }]
    })
    .compileComponents();
    //mockService.userLogin = {name: "Abhay"}
    
    mockService.getUserLogin = jasmine.createSpy().and.returnValue({name: "Abhay2"})

    fixture = TestBed.createComponent(EmployeeDashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
