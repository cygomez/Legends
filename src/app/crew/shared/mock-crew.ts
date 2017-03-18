import {CREW} from './crew.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import * as Rx from 'rxjs/Rx';

const CREWINFO: CREW[] = [
    {
        name: 'Mike',        // Name of Barbers
        imgUrl: '../../../assets/images/barbers/Andrew.png',     // File to Barber Head Shot
        socialAccountsLinks: [
            {
                name: 'Instagram', // Facebook, Instagram, Tumblr...etc
                urlLink: '' // Link to accounts
            }
        ],
        bioStory: '' // (Optional) story about Barber
    },
    {
        name: 'Aaron',
        imgUrl: '../../../assets/images/barbers/Aaron.png',
        socialAccountsLinks: [
            {
                name: 'Instagram',
                urlLink: ''
            }
        ],
        bioStory: ''
    },
    {
        name: 'Melvin',
        imgUrl: '../../../assets/images/barbers/Melvin.png',
        socialAccountsLinks: [
            {
                name: 'Instagram',
                urlLink: ''
            }
        ],
        bioStory: ''
    },
    {
        name: 'Ty',
        imgUrl: '../../../assets/images/barbers/Ty.png',
        socialAccountsLinks: [
            {
                name: 'Instagram',
                urlLink: ''
            }
        ],
        bioStory: ''
    },
    {
        name: 'Peter',
        imgUrl: '../../../assets/images/barbers/Peter.png',
        socialAccountsLinks: [
            {
                name: 'Instagram',
                urlLink: ''
            }
        ],
        bioStory: ''
    },
    {
        name: 'Andrew',
        imgUrl: '../../../assets/images/barbers/Andrew.png',
        socialAccountsLinks: [
            {
                name: 'Instagram',
                urlLink: ''
            }
        ],
        bioStory: ''
    }
];


export const CREWDATA: Observable<any>  = Rx.Observable.from(CREWINFO);
