import { Component, OnInit } from '@angular/core';
import { BolosService } from '../services/bolos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../models/lista.model';
import { ListaItem } from '../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor( private bolosService: BolosService,
               private route: ActivatedRoute) {

   const listaId = this.route.snapshot.paramMap.get('listaId');

   this.lista = this.bolosService.obtenerLista(listaId);

  }

  ngOnInit() {
  }

  agregarItem(){
 if (this.nombreItem.length === 0){
   return;
 }
 const nuevoItem = new ListaItem( this.nombreItem );
 this.lista.items.push( nuevoItem );
 this.nombreItem = '';
 this.bolosService.guardarStorage();
  }

  cambioCheck( item: ListaItem ){
      

       const pendientes = this.lista.items
                          .filter( itemData => !itemData.completado)
                          .length;

      console.log({pendientes});

      if ( pendientes === 0){
        this.lista.terminadaEn = new Date;
        this.lista.terminada = true;
      }else{
        this.lista.terminadaEn = null;
        this.lista.terminada = false;

      }

       this.bolosService.guardarStorage();

       console.log(this.bolosService.listas);
       
       
  }

}
