import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FichajesComponent } from './fichajes/fichajes.component';
import { InicioComponent } from './inicio/inicio.component';
import { TorneoComponent } from './torneo/torneo.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'fichajes',
    component: FichajesComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'torneo',
    component: TorneoComponent,
  },
  {
    path: 'encuentros',
    component: EncuentrosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
