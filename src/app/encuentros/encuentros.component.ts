import { Component } from '@angular/core';

@Component({
  selector: 'app-encuentros',
  templateUrl: './encuentros.component.html',
  styleUrls: ['./output-encuentros.component.css']
})
export class EncuentrosComponent {
  title = 'Encuentros';
  versusList= {
    cuartosFinal:[
      {
        equipo1:{nameteam:"DEPORTES TOLIMA", escudo:"./escudosEquipos/tolima.png"}, 
        equipo2:{nameteam:"AMERICA", escudo:"./escudosEquipos/america.png"}
      },
      {
        equipo1:{nameteam:"INDEPENDIENTE SANTA FE", escudo:"./escudosEquipos/santafe.png"}, 
        equipo2:{nameteam:"JUNIOR", escudo:"./escudosEquipos/junior.png"}
      },
      {
        equipo1:{nameteam:"JAGUARES", escudo:"./escudosEquipos/jaguares.png"}, 
        equipo2:{nameteam:"ATLETICO NACIONAL", escudo:"./escudosEquipos/nacional.png"}
      },
      {
        equipo1:{nameteam:"MILLONARIOS", escudo:"./escudosEquipos/millonarios.png"}, 
        equipo2:{nameteam:"PEREIRA", escudo:"./escudosEquipos/pereira.png"}
      }
    ],
    semifinal:[
      {
        equipo1:{nameteam:"DEPORTES TOLIMA", escudo:"./escudosEquipos/tolima.png"}, 
        equipo2:{nameteam:"ATLETICO NACIONAL", escudo:"./escudosEquipos/nacional.png"}
      },
      {
        equipo1:{nameteam:"INDEPENDIENTE SANTA FE", escudo:"./escudosEquipos/santafe.png"}, 
        equipo2:{nameteam:"MILLONARIOS", escudo:"./escudosEquipos/millonarios.png"}
      }
    ],
    final:[
      {
        equipo1:{nameteam:"DEPORTES TOLIMA", escudo:"./escudosEquipos/tolima.png"}, 
        equipo2:{nameteam:"INDEPENDIENTE SANTA FE", escudo:"./escudosEquipos/santafe.png"}
      }
    ],
    campeon:[
      {
        equipo1:{nameteam:"DEPORTES TOLIMA", escudo:"./escudosEquipos/tolima.png"}
      }
    ]
}
}