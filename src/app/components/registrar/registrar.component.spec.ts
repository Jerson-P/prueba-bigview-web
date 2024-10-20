import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarComponent } from './registrar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrarComponent', () => {
  let component: RegistrarComponent;
  let fixture: ComponentFixture<RegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, HttpClientTestingModule, FormsModule, BrowserAnimationsModule],
      declarations: [RegistrarComponent]
    });
    fixture = TestBed.createComponent(RegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
