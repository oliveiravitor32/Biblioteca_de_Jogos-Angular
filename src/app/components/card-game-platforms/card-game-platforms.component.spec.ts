import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGamePlatformsComponent } from './card-game-platforms.component';

describe('CardGamePlatformsComponent', () => {
  let component: CardGamePlatformsComponent;
  let fixture: ComponentFixture<CardGamePlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardGamePlatformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardGamePlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
