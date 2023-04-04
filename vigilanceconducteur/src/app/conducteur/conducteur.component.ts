import { Component, OnInit } from '@angular/core';
import { ConducteurService } from 'src/app/conducteur/service/conducteur.service';
import { Conducteur } from './model/conducteur.model';

@Component({
  selector: 'app-conducteur',
  templateUrl: './conducteur.component.html',
  styleUrls: ['./conducteur.component.css']
})
export class ConducteurComponent implements OnInit {
  conducteurs: Conducteur[];
  display: boolean = false;
  newConducteur: Conducteur = new Conducteur();
  constructor(private conducteurService: ConducteurService) { }

  ngOnInit(): void {

    this.conducteurService.getConducteurs().subscribe(data => {
      this.conducteurs = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Conducteur;

      })
    });


  }

    showDialog() {
        this.display = true;
    }

  createConducteur(){
    this.newConducteur.id = null;

      this.conducteurService.createConducteur(this.newConducteur);
  }

  updateConducteur(conducteur: Conducteur){
    this.conducteurService. updateConducteur(conducteur);
  }

  deleteConducteur(conducteurId: string){
    this.conducteurService.deleteConducteur(conducteurId);
  }

}
