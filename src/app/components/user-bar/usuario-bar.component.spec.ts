import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBarComponent } from './usuario-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsuarioBarComponent', () => {
  let component: UsuarioBarComponent;
  let fixture: ComponentFixture<UsuarioBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
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
