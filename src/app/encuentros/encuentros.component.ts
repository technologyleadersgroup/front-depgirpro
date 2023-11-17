import { Component } from '@angular/core';

@Component({
  selector: 'app-encuentros',
  templateUrl: './encuentros.component.html',
  styleUrls: ['./encuentros.component.css']
})
export class EncuentrosComponent {
  title = 'Encuentros';
  versusList= {
    cuartosFinal:[
      {
        equipo1:{nameteam:"DEPORTES TOLIMA", escudo:"./recursosEncuentros/tolima.png"}, 
        equipo2:{nameteam:"AMERICA", escudo:"./recursosEncuentros/america.png"}
      },
      {
        equipo1:{nameteam:"INDEPENDIENTE SANTA FE", escudo:"./recursosEncuentros/santafe.png"}, 
        equipo2:{nameteam:"JUNIOR", escudo:"./recursosEncuentros/junior.png"}
      },
      {
        equipo1:{nameteam:"JAGUARES", escudo:"./recursosEncuentros/jaguares.png"}, 
        equipo2:{nameteam:"ATLETICO NACIONAL", escudo:"./recursosEncuentros/nacional.png"}
      },
      {
        equipo1:{nameteam:"MILLONARIOS", escudo:"./recursosEncuentros/millonarios.png"}, 
        equipo2:{nameteam:"PEREIRA", escudo:"./recursosEncuentros/pereira.png"}
      }
    ],
    semifinal:[
      {
        equipo1:{nameteam:"DEPORTES TOLIMA", escudo:"./recursosEncuentros/tolima.png"}, 
        equipo2:{nameteam:"ATLETICO NACIONAL", escudo:"./recursosEncuentros/nacional.png"}
      },
      {
        equipo1:{nameteam:"INDEPENDIENTE SANTA FE", escudo:"./recursosEncuentros/santafe.png"}, 
        equipo2:{nameteam:"MILLONARIOS", escudo:"./recursosEncuentros/millonarios.png"}
      }
    ],
    final:[
      {
        equipo1:{nameteam:"DEPORTES TOLIMA", escudo:"tolima.png"}, 
        equipo2:{nameteam:"INDEPENDIENTE SANTA FE", escudo:"santafe.png"}
      }
    ],
    campeon:[
      {
        equipo1:{nameteam:"DEPORTES TOLIMA", escudo:"tolima.png"}
      }
    ]
}
}