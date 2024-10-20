import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVueloDialogComponent } from './nuevo-vuelo-dialog.component';

describe('NuevoVueloDialogComponent', () => {
  let component: NuevoVueloDialogComponent;
  let fixture: ComponentFixture<NuevoVueloDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoVueloDialogComponent]
    });
    fixture = TestBed.createComponent(NuevoVueloDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
