import { Injectable } from '@angular/core';
import { Conducteur } from '../model/conducteur.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {
    constructor(private firestore: AngularFirestore) { }

  getConducteurs(): Observable<any[]> {
      return this.firestore.collection('conducteurs').snapshotChanges();
  }

  createConducteur(conducteur: Conducteur){
    return this.firestore.collection('conducteurs').add({
      Cin: conducteur.Cin,
      Nom: conducteur.Nom.toLowerCase(),
      Prenom: conducteur.Prenom,
      Email: conducteur.Email,
      DateNaissance: conducteur.DateNaissance,
      TypePermis: conducteur.TypePermis,
      DatePermis: conducteur.DatePermis
    });
  }
  updateConducteur(conducteur: Conducteur){
    conducteur.Nom = conducteur.Nom.toLowerCase();
    return this.firestore.collection('conducteurs').doc().set(conducteur);
  }
 
  
  //update(conducteur: Conducteur){
  //delete conducteur.Cin;
  //this.firestore.doc('conducteurs/' + conducteur.Cin).update(conducteur);
  //} 

  
  deleteConducteur(conducteurId: string){
    this.firestore.doc('conducteurs/' + conducteurId).delete();
}

}
