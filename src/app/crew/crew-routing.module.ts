import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from '../bio/bio.component';
import { CrewService } from './shared/crew.service';


const routes: Routes = [
  {
    path: 'crew/:name', component: BioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CrewService
  ]
})
export class CrewRoutingModule { }
