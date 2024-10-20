import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reservas-usuario',
  templateUrl: './reservas-usuario.component.html',
  styleUrls: ['./reservas-usuario.component.css']
})
export class ReservasUsuarioComponent {
  reservas: any[] = [];
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas() {
    const idUsuario = this.authService.getIdUsuario(); 

    if (!idUsuario) {
      alert('No has iniciado sesión');
      return;
    }

    this.http.get(`${this.apiUrl}/reserva/persona/${idUsuario}/reservas`).subscribe(
      (response: any) => {
        this.reservas = response.objectResponse;
      },
      (error: any) => {
        alert('Error al obtener las reservas');
      }
    );
  }

  volverAVuelos() {
    this.router.navigate(['/vuelos']); // Navegar a la ruta de vuelos
  }
}
