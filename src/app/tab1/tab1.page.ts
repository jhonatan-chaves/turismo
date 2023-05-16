import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 
  constructor(public toastController : ToastController) {}

  openSite(url : any){

    window.open(url);
  }

 async like(){

    const toast  = await this.toastController.create({
      message: 'Salvo com Sucesso!', duration : 2000
    });
    toast.present();

  }
}
