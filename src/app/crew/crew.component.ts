import { Component, OnInit } from '@angular/core';
import { CrewService } from './shared/crew.service';
import { CREW } from './shared/crew.model';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.styl']
})
export class CrewComponent implements OnInit {
  crew: CREW;
  constructor(private crewService: CrewService) { }

  ngOnInit() {
    this.crewService.getCrew()
      .then(data => { return data; });
  }

  // TODO: Add routing once user clicks on Memeber Photo

}
