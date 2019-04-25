import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  createUser(value){
    debugger;
    return this.db.collection('usuarios').add({
      Nombre: value.name,
      Apellido: value.surname,
      Edad: parseInt(value.age),
      FechaNacimiento: value.dateBirth
    });
  }

  getUsers(){
    debugger;
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/usuarios').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }
}
