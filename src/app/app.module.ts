import {CrewModule} from './crew/crew.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';


import { MaterialModule } from '@angular/material';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {NewsLetterComponent} from './news-letter/news-letter.component';
import {SocialMediaComponent} from './social-media/social-media.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ServicesComponent} from './services/services.component';
import {CrewComponent} from './crew/crew.component';

import 'hammerjs';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const appRoutes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'news', component: NewsLetterComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'crew', component: CrewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsLetterComponent,
    SocialMediaComponent,
    SideMenuComponent,
    GalleryComponent,
    ServicesComponent,
    CrewComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    CrewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
