import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDescriptionGameComponent } from './title-description-game.component';

describe('TitleDescriptionGameComponent', () => {
  let component: TitleDescriptionGameComponent;
  let fixture: ComponentFixture<TitleDescriptionGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleDescriptionGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleDescriptionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
