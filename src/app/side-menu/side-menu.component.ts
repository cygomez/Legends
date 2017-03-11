import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.styl']
})
export class SideMenuComponent {
  private menuList = [
    {
      title: 'Services',
      imgUrl: '../../assets/images/sideMenu/services.svg',
      alt: 'services'
    },
    {
      title: 'News',
      imgUrl: '../../assets/images/sideMenu/news.svg',
      alt: 'news'
    },
    {
      title: 'Gallery',
      imgUrl: '../../assets/images/sideMenu/gallery.svg',
      alt: 'gallery'
    },
    {
      title: 'Shop',
      imgUrl: '../../assets/images/sideMenu/shop.svg',
      alt: 'shop'
    },
    {
      title: 'Crew',
      imgUrl: '../../assets/images/sideMenu/person.svg',
      alt: 'crew'
    },
    {
      title: 'Contact',
      imgUrl: '../../assets/images/sideMenu/contact.svg',
      alt: 'contact '
    }
  ];

  private close = {
    imgUrl: '../../assets/images/sideMenu/close.svg',
    alt: 'close'
  };
  constructor() { }



}
