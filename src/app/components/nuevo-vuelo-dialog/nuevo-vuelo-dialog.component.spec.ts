import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoVueloDialogComponent } from './nuevo-vuelo-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms'; // Asegúrate de que FormsModule esté importado
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NuevoVueloDialogComponent', () => {
  let component: NuevoVueloDialogComponent;
  let fixture: ComponentFixture<NuevoVueloDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [NuevoVueloDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(NuevoVueloDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
