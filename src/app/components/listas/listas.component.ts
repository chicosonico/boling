import { Component, OnInit, Input } from '@angular/core';
import { BolosService } from '../../services/bolos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(public bolosService: BolosService,
              private router: Router) { }

  ngOnInit() {}

  listaSeleccionada( lista: Lista ){
    if (this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);

    }

  }

  borrarLista( lista: Lista ){
    this.bolosService.borrarLista (lista);
  }

}
