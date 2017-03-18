import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrewService } from './shared/crew.service';
import { Observable } from 'rxjs/Observable';

import { CREW } from './shared/crew.model';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.styl']
})
export class CrewComponent implements OnInit {
  crew: Observable<CREW>;
  title: 'CREW';
  constructor(private crewService: CrewService, private router: Router) { }

  ngOnInit() {
    this.crew = this.crewService.getCrew();
  }

  // TODO: Add routing once user clicks on Memeber Photo
  goToMember(member){
    this.router.navigate(['/crew', member.name])
  }

}
