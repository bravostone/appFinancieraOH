import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  createUser(value){
    return this.db.collection('usuarios').add({
      name: value.name,
      surname: value.surname,
      age: parseInt(value.age)
    });
  }

  getUsers(){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/usuarios').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }
}
