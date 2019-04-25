import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component'
import { ClienteComponent } from './components/cliente/cliente.component';
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
{path: 'home',component: HomeComponent},
{path: 'cliente',component: ClienteComponent},
{path: '',pathMatch: 'full', redirectTo: 'home'}
];

export const AppRoutingModule:any[]=[];
export const routing:ModuleWithProviders =RouterModule.forRoot(routes);
