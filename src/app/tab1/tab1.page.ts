import { Component } from '@angular/core';
import { BolosService } from '../services/bolos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public bolosService: BolosService, 
               private router: Router) {

    

  }

  agregarLista(){

      this.router.navigateByUrl("tabs/tab1/agregar");

    }

}
