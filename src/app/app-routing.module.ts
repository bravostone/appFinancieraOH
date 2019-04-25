import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component'
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
{path: 'home',component: HomeComponent},
{path: 'cliente',component: ClienteComponent},
{path: '**',pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
