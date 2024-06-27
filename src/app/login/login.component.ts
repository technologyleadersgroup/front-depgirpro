import { Component, OnInit  } from '@angular/core';
import { ApiService } from 'src/servicies/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  correo: string = "juan@gmail.com";
  password: string = "12345";
  constructor(private apiService: ApiService) { }
 
 
  ngOnInit(){
    this.apiService.login(this.correo, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        // Manejar la respuesta del login exitoso
      },
      error => {
        console.error('Login failed', error);
        // Manejar el error de login
      }
    );
  }






//La parte del ojito para visualizarla contraseña
  isMostrar: boolean = false; //Inicialmente el elemento no esta oculto
  ojito(){
    this.isMostrar= !this.isMostrar; //cambiara el estado
    
  }
}
