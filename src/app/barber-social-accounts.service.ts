import { Injectable } from '@angular/core';
import { Keys } from '../../Api-keys';
@Injectable()
export class BarberSocialAccountsService {

  constructor() { }

  getInstragram() {
    return Promise.resolve(Keys);
  }

}
