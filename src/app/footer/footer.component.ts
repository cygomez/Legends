import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent {
  title = 'HOURS';
  timeOne = 'Mon-Fri: 9am - 5pm';
  timeTwo = 'Sat: 11am - 4pm';
  comeOnIn = 'Appointment &#38 Walkins Welcome';
  constructor() { }


}
