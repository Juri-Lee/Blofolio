import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostelementComponent } from './postelement.component';

describe('PostelementComponent', () => {
  let component: PostelementComponent;
  let fixture: ComponentFixture<PostelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
