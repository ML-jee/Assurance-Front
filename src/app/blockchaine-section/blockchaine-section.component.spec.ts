import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchaineSectionComponent } from './blockchaine-section.component';

describe('BlockchaineSectionComponent', () => {
  let component: BlockchaineSectionComponent;
  let fixture: ComponentFixture<BlockchaineSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockchaineSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockchaineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
