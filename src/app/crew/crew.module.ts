import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from '../bio/bio.component';
import { CrewRoutingModule } from './crew-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CrewRoutingModule
  ],
  declarations: [
    BioComponent
  ]
})
export class CrewModule { }
