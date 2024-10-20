import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { authGuard } from './guards/auth.guard';
import { ReservasUsuarioComponent } from './components/reservas-usuario/reservas-usuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrarComponent },
  { path: 'reservas', component: ReservasUsuarioComponent, canActivate: [authGuard] },
  { path: 'vuelos', component: VuelosComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
