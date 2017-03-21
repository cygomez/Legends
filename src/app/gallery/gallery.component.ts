import { Component, OnInit } from '@angular/core';
import { GalleryService } from './shared/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.styl'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {
  title = 'GALLERY';
  photos: any = null;
  errorMessage: string = null;
  constructor(private service: GalleryService) {}

  /**
   * TODO: instragram feed
   */
  ngOnInit() {
    this.service.getGalleryPhotos()
      .subscribe(
      photos => this.photos = photos,
      error => this.errorMessage = error);
  }

}
