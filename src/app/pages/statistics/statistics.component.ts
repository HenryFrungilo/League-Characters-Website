import { Component } from '@angular/core';
import { Champions } from './model/champions.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  champion: Champions[]

  regioes: any[]

  regiaoSelecionada: unknown

  constructor() {
    this.champion = [
      { name: "Camille", winRate: 51.2, pickRate: 4.0, banRate: 2.7, role: "Top Laner" },
      { name: "Kayn", winRate: 50.1, pickRate: 9.2, banRate: 8.4, role: "Jungler" },
      { name: "Zed", winRate: 48.3, pickRate: 8.4, banRate: 32.3, role: "Mid Laner" },
      { name: "Aphelios", winRate: 46.9, pickRate: 7.9, banRate: 1.3, role: "ADC" },
      { name: "Leona", winRate: 49.5, pickRate: 4.9, banRate: 4.0, role: "Support" },
    ];

    this.regioes = [
      {
        nome: 'Ionia',
        campeoes: [
          {nomeCampeao: 'Ahri'},
          {nomeCampeao: 'Akali'},
          {nomeCampeao: 'Irelia'},
          {nomeCampeao: 'Ivern'},
          {nomeCampeao: 'Jhin'},
          {nomeCampeao: 'Karma'},
          {nomeCampeao: 'Kennen'},
          {nomeCampeao: 'Lee Sin'},
          {nomeCampeao: 'Lillia'},
          {nomeCampeao: 'Master Yi'},
          {nomeCampeao: 'Rakan'},
          {nomeCampeao: 'Sett'},
          {nomeCampeao: 'Shen'},
          {nomeCampeao: 'Syndra'},
          {nomeCampeao: 'Varus'},
          {nomeCampeao: 'Wukong'},
          {nomeCampeao: 'Xayah'},
          {nomeCampeao: 'Yasuo'},
          {nomeCampeao: 'Yone'},
        ]
      },
      {
        nome: 'Águas de Sentina',
        campeoes: [
          {nomeCampeao: 'Fizz'},
          {nomeCampeao: 'Gangplank'},
          {nomeCampeao: 'Graves'},
          {nomeCampeao: 'Illaoi'},
          {nomeCampeao: 'Miss Fortune'},
          {nomeCampeao: 'Nautilus'},
          {nomeCampeao: 'Nilah'},
          {nomeCampeao: 'Tamn Kench'},
          {nomeCampeao: 'Pyke'},
          {nomeCampeao: 'Twisted Fate'},
        ]
      },
    ]
  }
}
