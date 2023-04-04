import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/appareil/service/appareil.service';
import { Appareil } from './model/appareil.model';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  appareils: Appareil[];
  displayAdd: boolean = false;
  displayUpdate: boolean = false;
  newAppareil: Appareil = new Appareil();
  appareilUpdate : Appareil = new Appareil();

  constructor(private appareilService: AppareilService) { }
  appareil: Appareil = new Appareil();
  ngOnInit(): void {

    //this.appareil.Id = "1";
    //this.appareil.Type = "Raspberry";
    //this.appareil.Numero = "123";
  

    //this.appareilService.createAppareil({...this.appareil});

    this.appareilService.getAppareils().subscribe(data => {
      this.appareils = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Appareil;

      })
    });

    
 
  
  }
  showAddDialog() {
    this.displayAdd = true;
}

showUpdateDialog(appareilToUpdate: Appareil) {
  this.displayUpdate = true;

  this.appareilUpdate = appareilToUpdate;
}
    createAppareil(){
  this.newAppareil.Id = null;

    this.appareilService.createAppareil(this.newAppareil);
    this.displayAdd = false;
}

updateAppareil(appareil: Appareil){
  this.appareilService.updateAppareil(appareil);
  this.displayUpdate = false;
}

deleteAppareil(appareilId: string){
  this.appareilService.deleteAppareil(appareilId);
}
}

  

