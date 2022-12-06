import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDialogBoxComponent } from './game-dialog-box.component';

describe('GameDialogBoxComponent', () => {
  let component: GameDialogBoxComponent;
  let fixture: ComponentFixture<GameDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
