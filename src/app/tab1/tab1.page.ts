import { Component } from '@angular/core';
import { BolosService } from '../services/bolos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public bolosService: BolosService,
               private router: Router,
               private alertCtrl: AlertController) {



  }

  async agregarLista(){

      // this.router.navigateByUrl('tabs/tab1/agregar');
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Nueva Lista',
        inputs: [
          { name: 'titulo',
          type: 'text',
          placeholder: 'nombre de la lista'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('cancelado');

            }
          },
          {
            text: 'Crear',
            handler: ( data ) => {
              console.log(data);
              if (data.titulo.length === 0){
                return;
              }
              const listaId = this.bolosService.crearLista(data.titulo);
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
            }
          }
        ]
      });

      await alert.present();
    }

}
