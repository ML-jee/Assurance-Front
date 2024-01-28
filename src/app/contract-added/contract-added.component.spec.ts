import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAddedComponent } from './contract-added.component';

describe('ContractAddedComponent', () => {
  let component: ContractAddedComponent;
  let fixture: ComponentFixture<ContractAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractAddedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
