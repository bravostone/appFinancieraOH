import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  
  desviacion : any;
  promedio: any;
  sumaEdades: number = 0;
  varianza: number = 0;
  total_varianza: number = 0;
  

  constructor(public db: AngularFirestore) { }

  createUser(value){

    return this.db.collection('usuarios').add({
      Nombre: value.name,
      Apellido: value.surname,
      Edad: parseInt(value.age),
      FechaNacimiento: value.dateBirth._d
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

  calcularPromedio(array){
    array.forEach(element => {
      this.sumaEdades = parseInt(element.payload.doc.data().Edad) + this.sumaEdades;
    });
    this.promedio = (this.sumaEdades / array.length);
    return this.promedio;
  }

  calcularDesviacion(array, promed){
    array.forEach(element => {
      this.varianza = Math.pow(parseInt(element.payload.doc.data().Edad) - (promed),2) + this.varianza;
    });
    this.total_varianza =  this.varianza / (array.length - 1);
    this.desviacion     =   Math.round(Math.sqrt(this.total_varianza) * 1000) / 1000;
    return this.desviacion;
  }
}
