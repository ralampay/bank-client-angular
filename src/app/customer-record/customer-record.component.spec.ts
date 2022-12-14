import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRecordComponent } from './customer-record.component';

describe('CustomerRecordComponent', () => {
  let component: CustomerRecordComponent;
  let fixture: ComponentFixture<CustomerRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
