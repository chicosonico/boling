import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class BolosService {
   listas: Lista[] = [];
  constructor() {
    const lista1 = new Lista('Grabaciones');
    const lista2 = new Lista('Bolos');

    this.listas.push(lista1, lista2);

    console.log(this.listas);
    

  }
}
