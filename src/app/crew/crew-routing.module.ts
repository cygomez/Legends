import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrewComponent } from './crew.component';
import { BioComponent } from '../bio/bio.component';

const routes: Routes = [
  {
    path: 'crew:name', component: BioComponent
  },
  {
    path: 'crew', component: CrewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CrewRoutingModule { }
