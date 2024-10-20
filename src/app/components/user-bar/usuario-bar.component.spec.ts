import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBarComponent } from './usuario-bar.component';

describe('UsuarioBarComponent', () => {
  let component: UsuarioBarComponent;
  let fixture: ComponentFixture<UsuarioBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioBarComponent]
    });
    fixture = TestBed.createComponent(UsuarioBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
