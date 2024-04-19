import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 
  
  isMostrar: boolean = false; //Inicialmente el elemento no esta oculto
  password: string = '';

  ojito(){
    this.isMostrar= !this.isMostrar; //cambiara el estado
    
  }
}
