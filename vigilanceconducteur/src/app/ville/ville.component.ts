import { Component, OnInit } from '@angular/core';
import { VilleService } from 'src/app/ville/service/ville.service';
import { Ville } from './model/ville.model';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {
  villes: Ville[];

  constructor(private villeService: VilleService) { }
  //ville: Ville = new Ville();

  ngOnInit(): void {


    
    //this.ville.Idv = "1";
    //this.ville.Codepostal = "5114";
    //this.ville.Nom = "Mahdia";

    //this.villeService.createVille({...this.ville});
    
  

    this.villeService.getVilles().subscribe(data => {
      this.villes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Ville;

      })
    });


    
  }



createVille(ville: Ville){
    this.villeService.createVille(ville);
}

updateVille(ville: Ville){
  this.villeService. updateVille(ville);
}

deleteVille(villeIdv: string){
  this.villeService.deleteVille(villeIdv);
}
  }


