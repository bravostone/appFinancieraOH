import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Array<any>;
  promedio: any;
  desviacion: any;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.firebaseService.getUsers()
    .then(result => {
      this.items = result;
      this.getCalculos(this.items);
    })
  }

  getCalculos(array){
    this.promedio = this.firebaseService.calcularPromedio(array);
    console.log("Promedio:" + this.promedio);
    this.desviacion = this.firebaseService.calcularDesviacion(array,this.promedio);
    console.log("Desviacion:" + this.desviacion);
  }
}
