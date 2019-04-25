import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  exampleForm: FormGroup;

  validation_messages = {
    'name': [
      { type: 'required', message: 'Nombre es obligatorio.' }
    ],
    'surname': [
      { type: 'required', message: 'Apellidos es obligatorio.' }
    ],
    'age': [
      { type: 'required', message: 'Edad es obligatoria.' },
    ],
    'dateBirth': [
      { type: 'required', message: 'Fecha es obligatorio.' },
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebase: FirebaseService
    ) { }

  ngOnInit() {
    this.createForm();
  }
  
  createForm() {
    this.exampleForm = this.formBuilder.group({
      name: ['', Validators.required ],
      surname: ['', Validators.required ],
      age: ['', Validators.required ],
      dateBirth:['', Validators.required ]
    });
  };

  limpiarCampos(){
    this.exampleForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      dateBirth: new FormControl('', Validators.required),
    });
  };

  onSubmit(value){
    this.firebase.createUser(value)
    .then(
      res => {
        this.limpiarCampos();
        this.router.navigate(['/home']);
      }
    )
  }
}
