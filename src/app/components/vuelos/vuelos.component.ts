import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NuevoVueloDialogComponent } from '../nuevo-vuelo-dialog/nuevo-vuelo-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

  vuelos: any[] = [];
  paises: string[] = ['Huila', 'Bogotá', 'Medellín', 'Cali', 'Cartagena'];
  filtros = {
    origen: null as string | null,
    destino: null as string | null,
    fechaSalida: null as string | null
  };
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.buscarVuelos();
  }

  buscarVuelos() {
    this.http.get(`${this.apiUrl}/vuelo/all`).subscribe(
      (response: any) => {
        this.vuelos = response.objectResponse;
      },
      (error: any) => {
        alert('Error al buscar vuelos');
      }
    );
  }

  filtrarVuelos() {
    const fechaFormateada = this.formatearFecha(this.filtros.fechaSalida)
    const filtrosAplicados = {
      fechaSalida: fechaFormateada || null,
      origen: this.filtros.origen || null,
      destino: this.filtros.destino || null
    };

    this.http.post(`${this.apiUrl}/vuelo/buscar`, filtrosAplicados).subscribe(
      (response: any) => {
        this.vuelos = response.objectResponse;
      },
      (error: any) => {
        console.log("error -> "+JSON.stringify(error))
        alert(error.error.message);
      }
    );
  }

  reservarVuelo(vueloId: number) {
    const idPersona = this.authService.getIdUsuario();
    const reserva = {
      idVuelo: vueloId,
      idPersona: idPersona,
      fechaReserva: new Date().toISOString(),
      estado: "pendiente"
    };

    this.http.post(`${this.apiUrl}/reserva`, reserva).subscribe(
      (response) => {
        alert('Reserva realizada exitosamente');
      },
      (error) => {
        alert('Error al reservar el vuelo');
      }
    );
  }

  formatearFecha(fecha: any) {
    if (fecha) {
      const fechaISO = new Date(fecha).toISOString().split('.')[0] + '.000+00:00';
      return fechaISO;
    } else {
      return  null;
    }
  }
  
  

  // Al abrir el diálogo
abrirNuevoVueloDialog() {
  const dialogRef = this.dialog.open(NuevoVueloDialogComponent, {
    width: '200px', 
    height: 'auto',
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      const fechaSalida = this.formatearFecha(result.fechaSalida)
      const fechaLlegada = this.formatearFecha(result.fechaLlegada)
      const json = {
        id: null,
        origen: result.origen,
        destino: result.destino,
        fechaSalida: fechaSalida,
        fechaLlegada: fechaLlegada,
        precio: result.precio,
        disponibilidad: result?.disponibilidad
      }
      this.http.post(`${this.apiUrl}/vuelo`, json).subscribe(
        () => {
          this.buscarVuelos();  // Recargar la lista de vuelos
          alert('Vuelo creado exitosamente');
        },
        () => alert('Error al crear el vuelo')
      );
    }
  });
}

  
  
}
