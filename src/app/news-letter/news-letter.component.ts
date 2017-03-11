import { Component } from '@angular/core';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.styl']
})
export class NewsLetterComponent {
  signUp = 'Sign Up';
  emailLine = 'Enter Email';
  emailHeader = 'Subscribe to our Newsletter.';
  constructor() { }


}
