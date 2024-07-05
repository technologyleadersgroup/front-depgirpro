import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../service/miservicio.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string="juana@gmail.com";
  password:string="12345";
  errorMessage:string="";
  constructor(private miservicio: MiservicioService, private TokenService: TokenService) { }
  isMostrar: boolean = false; //Inicialmente el elemento no esta oculto

  ngOnInit(){
    this.onLogin();
    this.ontoken();
  }

  ojito() {
    this.isMostrar = !this.isMostrar; //cambiara el estado
  }

  onLogin(): void {
    this.miservicio.login(this.username, this.password).subscribe(
      response => {
        console.log('Login exitoso', response);
        // Manejar la respuesta del login, como redirigir al usuario
      },
      error => {
        console.log('Error en el login', error);
        this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.';
      }
    );
  } 
  isTokenValid = false;
    // Guardar el token
    localStorage.setItem('TokenService', token);

    // Recuperar el token
    const token = localStorage.getItem('authToken');
  ontoken ():void {
    this.TokenService.isTokenValid().subscribe(
      response => {
      (isValid: boolean) => {
        this.isTokenValid = isValid;
      }
    },
      error => {
        this.isTokenValid = false;
      }
    );

  }
} 
