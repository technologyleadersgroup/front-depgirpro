import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css']
})
export class VersusComponent {
  @Input() team1: String | undefined;
  @Input() team2: String | undefined;
  @Input() escudoTeam1: String | undefined;
  @Input() escudoTeam2: String | undefined;
}
