import { Component, OnInit } from '@angular/core';
import { Service } from './shared/services.model';
import { ServiceData } from './shared/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.styl']
})
export class ServicesComponent implements OnInit {
  title = 'SERVICES';
  additionalInfo = 'Barber will provide additional prices';
  services: Service[] = [];


  constructor(private serviceData: ServiceData) { }

  ngOnInit() {
    this.serviceData.getServiceData().then(data => this.services = data);
  }
}
