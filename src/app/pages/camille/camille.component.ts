import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camille',
  templateUrl: './camille.component.html',
  styleUrls: ['./camille.component.css']
})
export class CamilleComponent {

  constructor(private _router: Router) {

  }

  voltarPaginaPrincipal() {
    this._router.navigate(['']);
  }
  verStats() {
    this._router.navigate(['Stats']);
  }

}
