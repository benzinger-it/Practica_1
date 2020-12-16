import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'practica01';
  // tslint:disable-next-line: semicolon
  langs: string[] = []

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'es']);
    this.translate.setDefaultLang('de');
    this.langs = this.translate.getLangs();
  }
  // tslint:disable-next-line: typedef
  changeLang(lang: string){
    this.translate.use(lang);
  }
  
  datos = {
    'nombre': '',
    'edad': null
  }
  guardar(){
    localStorage.setItem('datos', JSON.stringify(this.datos))
  }
  llamar(){
    
    var item = localStorage.getItem('datos');
    this.datos = JSON.parse(item)
  }
}

 
  
  