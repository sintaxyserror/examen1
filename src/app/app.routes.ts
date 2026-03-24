import { Routes } from '@angular/router';
import { Ejercicio2Component } from './views/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './views/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './views/ejercicio4/ejercicio4.component';

export const routes: Routes = [
  { path: 'ejercicio2', component: Ejercicio2Component },
  { path: 'ejercicio3', component: Ejercicio3Component },
  { path: 'ejercicio4', component: Ejercicio4Component },
  { path: '', redirectTo: 'ejercicio2', pathMatch: 'full' }
];
