import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Voiture } from '../model/voiture.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private firestore: AngularFirestore) { }


  getVoitures(): Observable<any[]> {
    return this.firestore.collection('voitures').snapshotChanges();
}

createVoiture(voiture: Voiture){
  return this.firestore.collection('voitures').add(voiture);
}

updateVoiture(voiture: Voiture){
delete voiture.Matricule;
this.firestore.doc('voiture/' + voiture.Matricule).update(voiture);
}

deleteVoiture(voitureMatricule: string){
  this.firestore.doc('voitures/' + voitureMatricule).delete();
}


}
