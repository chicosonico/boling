import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BolosService } from '../../services/bolos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList) lista: IonList;
  @Input() terminada = true;

  constructor(public bolosService: BolosService,
              private router: Router,
              private alertCtrl: AlertController) { }

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

  async editarLista( lista: Lista){

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Editar Nombre',
      inputs: [
        { name: 'titulo',
        type: 'text',
        value: lista.titulo,
        placeholder: 'nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelado');
            this.lista.closeSlidingItems();


          }
        },
        {
          text: 'Actualizar',
          handler: ( data ) => {
            console.log(data);
            if (data.titulo.length === 0){
              return;
            }
            lista.titulo = data.titulo;
            this.bolosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();

  }

}
