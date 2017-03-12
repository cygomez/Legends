import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { CrewComponent } from './crew/crew.component';
import { BioComponent } from './bio/bio.component';

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
    BioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
