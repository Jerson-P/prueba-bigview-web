import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  user = { nombre: '', apellido: '', correo: '', telefono: '', contrasena: '', activo: true };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      (response: any) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']);
      },
      (error: any) => {
        alert('Error en el registro');
      }
    );
  }
}
