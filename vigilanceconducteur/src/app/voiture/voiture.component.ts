import { Component, OnInit } from '@angular/core';
import { VoitureService } from 'src/app/voiture/service/voiture.service';
import { Voiture } from './model/voiture.model';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  voitures: Voiture[];

  constructor(private voitureService: VoitureService) { }
 // voiture: Voiture = new Voiture();
  ngOnInit(): void {

    //this.voiture.Matricule = "127 tunis 12";
    //this.voiture.Marque = "Range Rover";
    //this.voiture.Modele = "A8";
    //this.voiture.Puissance = "238w";
    //this.voiture.Type = "familiale";
    //this.voiture.Kilometrage = "100KM";

    //this.voitureService.createVoiture({...this.voiture});
  

    this.voitureService.getVoitures().subscribe(data => {
      this.voitures = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Voiture;

      })
    });


  }
createVoiture(voiture: Voiture){
    this.voitureService.createVoiture(voiture);
}

updateVoiture(voiture: Voiture){
  this.voitureService. updateVoiture(voiture);
}

deleteVoiture(voitureMatricule: string){
  this.voitureService.deleteVoiture(voitureMatricule);
}

}
