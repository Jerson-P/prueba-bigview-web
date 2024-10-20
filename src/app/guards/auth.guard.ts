import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Inyecta el servicio de autenticación
  const router = inject(Router);            // Inyecta el router para redirigir si no está autenticado

  if (authService.isAuthenticated()) {
    return true;  // Si está autenticado, permite el acceso
  } else {
    router.navigate(['/login']);  // Redirige al login si no está autenticado
    return false;
  }
};
