import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usuario-bar',
  templateUrl: './usuario-bar.component.html',
  styleUrls: ['./usuario-bar.component.css']
})
export class UsuarioBarComponent {

  usuario: any = null;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const userId = this.authService.getIdUsuario();  // Obtener el ID del usuario almacenado
    if (userId) {
      this.http.get(`${this.apiUrl}/persona/${userId}`).subscribe(
        (response: any) => {
          this.usuario = response.objectResponse;  // Guardar el usuario en la variable
        },
        (error) => {
          alert('Error al cargar la información del usuario');
        }
      );
    }
  }
  
  verReservas() {
    this.router.navigate(['/reservas']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);  // Redirigir al login tras desloguearse
  }
  
}
