import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { InscribirEquiposComponent } from './inscribir-equipos/inscribir-equipos.component';
import { InicioComponent } from './inicio/inicio.component';
import { TorneoComponent } from './torneo/torneo.component';
import { TablaClasificacionComponent } from './tabla-clasificacion/tabla-clasificacion.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';
import { VersusComponent } from './encuentros/versus/versus.component';
import { CampeonComponent } from './encuentros/campeon/CampeonComponent';
import { TablaResultadosComponent } from './tabla-resultados/tabla-resultados.component';
import { PerfilJugadorComponent } from './perfil-jugador/perfil-jugador.component';
import { FichajesComponent } from './fichajes/fichajes.component';

const routes: Routes = [
  { path: 'inicio', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inscribirEquipos', component: InscribirEquiposComponent},
  // Agregar más rutas según tus necesidades
];
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    NavbarComponent,
    LoginComponent,
    InscribirEquiposComponent,
    InicioComponent,
    TorneoComponent,
    TablaClasificacionComponent,
    EncuentrosComponent,
    VersusComponent,
    CampeonComponent,
    TablaResultadosComponent,
    PerfilJugadorComponent,
    FichajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
