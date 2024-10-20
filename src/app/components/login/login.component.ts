import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/models/login-response.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = { correo: '', contrasena: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        this.authService.setToken(response.objectResponse.token);
        this.authService.setIdUsuario(response.objectResponse.idUsuario)
  
        this.router.navigate(['/vuelos']);
      },
      (error: any) => {
        alert('Login failed');
      }
    );
  }
  
}
