import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

isVisible: boolean = false; //Inicialmente el elemento no esta oculto

  hamburguesa(){
    this.isVisible = !this.isVisible; //cambiara el estado
  }
 
}
