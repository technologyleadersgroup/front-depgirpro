import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-campeon',
  templateUrl: './campeon.component.html',
  styleUrls: ['./campeon.component.css']
})
export class CampeonComponent {
  @Input() team1: String | undefined;
  @Input() escudoTeam1: String | undefined;
}
