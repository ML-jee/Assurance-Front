import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPresentationComponent } from './contract-presentation.component';

describe('ContractPresentationComponent', () => {
  let component: ContractPresentationComponent;
  let fixture: ComponentFixture<ContractPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
