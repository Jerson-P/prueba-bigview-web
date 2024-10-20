import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasUsuarioComponent } from './reservas-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReservasUsuarioComponent', () => {
  let component: ReservasUsuarioComponent;
  let fixture: ComponentFixture<ReservasUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ReservasUsuarioComponent]
    });
    fixture = TestBed.createComponent(ReservasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
