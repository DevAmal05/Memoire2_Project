import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Appareil } from '../model/appareil.model';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor(private firestore: AngularFirestore) { }


  getAppareils(): Observable<any[]> {
    return this.firestore.collection('appareils').snapshotChanges();
}

createAppareil(appareil: Appareil){
  return this.firestore.collection('appareils').add({
    Id: appareil.Id,  
    Type: appareil.Type,
    Numero: appareil.Numero,
  
  });
}
 
updateAppareil(appareil: Appareil){
  
  this.firestore.doc('appareils/' + appareil.Id).update(appareil);
 } 
 
   
deleteAppareil(appareilId: string){
     this.firestore.doc('appareils/' + appareilId).delete();
 }

}
