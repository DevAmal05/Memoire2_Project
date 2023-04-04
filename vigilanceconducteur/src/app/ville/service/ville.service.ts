import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ville } from '../model/ville.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private firestore: AngularFirestore) { }


  getVilles(): Observable<any[]> {
    return this.firestore.collection('villes').snapshotChanges();
}

createVille(ville: Ville){
  return this.firestore.collection('villes').add(ville);
}

updateVille(ville: Ville){
delete ville.Idv;
this.firestore.doc('ville/' + ville.Idv).update(ville);
}

deleteVille(villeIdv: string){
  this.firestore.doc('villes/' + villeIdv).delete();
}



}
