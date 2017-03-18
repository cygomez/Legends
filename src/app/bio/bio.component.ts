import { Params, Router,  ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CREW } from '../crew/shared/crew.model';
import { CrewService } from '../crew/shared/crew.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.styl']
})
export class BioComponent implements OnInit {
  member: {};
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: CrewService
    ) {}


  ngOnInit() {
    this.route.params
      .switchMap( (params: Params) =>  this.service.getCrewMember(params['name']))
      .subscribe( (person) => this.member = person);
  }

}
