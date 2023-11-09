import { Component } from '@angular/core';
import { Champions } from './model/champions.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  champion: Champions[]

  constructor() {
    this.champion = [
      { name: "Camille", winRate: 51.2, pickRate: 4.0, banRate: 2.7, role: "Top Laner"},
      { name: "Kayn", winRate: 50.1, pickRate: 9.2, banRate: 8.4, role: "Jungler"},
      { name: "Zed", winRate: 48.3, pickRate: 8.4, banRate: 32.3, role: "Mid Laner" },
      { name: "Aphelios", winRate: 46.9, pickRate: 7.9, banRate: 1.3, role: "ADC" },
      { name: "Leona", winRate: 49.5, pickRate: 4.9, banRate: 4.0, role: "Support"},
    ];
  }

}
