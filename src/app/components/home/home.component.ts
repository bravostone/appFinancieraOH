import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router,Params } from '@angular/router';
// import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<any>;
  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    debugger;
    this.getData();
  }

  getData(){
    // this.firebaseService.getUsers()
    // .subscribe(result => {
    //   this.items = result;
    // })
  }

}
