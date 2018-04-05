import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WelcomePage} from "../welcome/welcome";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  welcome:any=WelcomePage;
  constructor(public navCtrl: NavController) {

  }
  navegarPagina(){
    this.navCtrl.push(WelcomePage);
  }

}
