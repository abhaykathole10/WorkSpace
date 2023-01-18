import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeHomeComponent } from './employee-home.component';

describe('EmployeeHomeComponent', () => {
  let component: EmployeeHomeComponent;
  let fixture: ComponentFixture<EmployeeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHomeComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test Calculate with one arg', () => {
    const total = component.calculate(20);
    expect(total).toEqual(24);
  });

  it('should test Calculate with two arg', () => {
    const total = component.calculate(20, 10);
    expect(total).toEqual(30);
  });

  it('should test Calculate input1', () => {
    //if you want HTML content in spec file
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#inputOne')!;  //agar null rahe to exception na aaye isiliye !
    nameInput.value = "12";  
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();  //to reRender HTML component
    expect(String(component.input1)).toEqual("12");
  });

  it('should test Calculate with Html', () => {
    //if you want HTML content in spec file
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#inputOne')!;  //agar null rahe to exception na aaye isiliye !
    nameInput.value = "12";  
    nameInput.dispatchEvent(new Event('input'));
    const nameInputButton: HTMLInputElement = hostElement.querySelector('input[type="button"]')!;     
    nameInputButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();  //to reRender HTML component
    const result: HTMLInputElement = hostElement.querySelector('.result')!; 
    console.log(result.textContent);
    expect(result.textContent).toContain("16");
  });
  
});