import { Keys } from '../../../../Api-keys';
import { Response, RequestOptions, Headers, Jsonp, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';
import { InstagramAPI } from '../../api/instagram/user.endpoints';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class GalleryService {

  private cyInstagramLink = `${Keys.cyrusInstagramAccessToken}&callback=JSONP_CALLBACK`;


  constructor(private jsonp: Jsonp) { }

  getGalleryPhotos(): Observable<{}> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const params = new URLSearchParams();


    return this.jsonp.request(`${InstagramAPI.beginning}${InstagramAPI.recentMedia}` + this.cyInstagramLink)
      .map(this.extractData)
      // .map(response => <string[]> response.json()[1])
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    const yea = res.json();
    console.log(yea);
    const body: any = JSON.stringify(res);
    return body.data || {};
  }

  private handleError(error: Response) {
    let errMsg: string;
    if (error) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = `JSONP didn't work`;
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
