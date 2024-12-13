import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomDataComponent } from './recom-data.component';

describe('RecomDataComponent', () => {
  let component: RecomDataComponent;
  let fixture: ComponentFixture<RecomDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecomDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
