import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  title = 'app works!';
  address = '506 E. 32nd ST., Baltimore, MD 21218';
  phone = '(800) - LEGENDS';
  constructor() { }

  ngOnInit() {}

}
