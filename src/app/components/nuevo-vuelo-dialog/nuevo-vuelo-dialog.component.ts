import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nuevo-vuelo-dialog',
  templateUrl: './nuevo-vuelo-dialog.component.html',
  styleUrls: ['./nuevo-vuelo-dialog.component.css']
})
export class NuevoVueloDialogComponent {

  nuevoVuelo = {
    origen: '',
    destino: '',
    fechaSalida: '',
    fechaLlegada: '',
    disponibilidad: null,
    precio: null
  };

  paises = ['Colombia', 'México', 'Estados Unidos', 'España', 'Huila'];

  constructor(public dialogRef: MatDialogRef<NuevoVueloDialogComponent>) {}

  guardarVuelo() {
    this.dialogRef.close(this.nuevoVuelo);
  }

  cancelar() {
    this.dialogRef.close();
  }
}